#!/usr/bin/env bash

set -e
#
# Library for file system actions

# shellcheck disable=SC1091

# Load Generic Libraries
. liblog.sh

# Functions

########################
# Ensure a file/directory is owned (user and group) but the given user
# Arguments:
#   $1 - filepath
#   $2 - owner
# Returns:
#   None
#########################
owned_by() {
    local path="${1:?path is missing}"
    local owner="${2:?owner is missing}"
    local group="${3:-}"

    if [[ -n $group ]]; then
        chown "$owner":"$group" "$path"
    else
        chown "$owner":"$owner" "$path"
    fi
}

########################
# Ensure a directory exists and, optionally, is owned by the given user
# Arguments:
#   $1 - directory
#   $2 - owner
#   $3 - owner group
# Returns:
#   None
#########################
ensure_dir_exists() {
    local dir="${1:?directory is missing}"
    local owner_user="${2:-}"
    local owner_group="${3:-}"

    debug "Create dir : ${dir} with owner ${owner_user}:${owner_group}"
    mkdir -p "${dir}"
    if [[ -n $owner_user ]]; then
        owned_by "$dir" "$owner_user" "$owner_group"
    fi
}

########################
# Ensure a directory exists and is empty and, optionally, is owned by the given user
# Arguments:
#   $1 - directory
#   $2 - owner
#   $3 - owner group
# Returns:
#   None
#########################
ensure_dir_exists_and_empty() {
    local dir="${1:?directory is missing}"
    local owner_user="${2:-}"
    local owner_group="${3:-}"

    debug "Create dir : ${dir} with owner ${owner_user}:${owner_group}"
    mkdir -p "${dir}"
    if [[ -n $owner_user ]]; then
        owned_by "$dir" "$owner_user" "$owner_group"
    fi
    debug "Empty dir : ${dir}"
    rm -rf "${dir:?}"/*
}

########################
# Copy a file from a source to a destination if missing.
# arguments:
#   $1 - source directory
#   $2 - target directory
#   $3 - owner
#   $4 - owner group
# returns:
#   boolean
#########################
copy_if_missing() {
    local source_dir="${1:?source directory is missing}"
    local target_dir="${2:?target directory is missing}"
    local owner_user="${3:-}"
    local owner_group="${4:-}"

    debug "Copy missing files from ${source_dir} to ${target_dir}"
    for file in "${source_dir}"/*; do
        if [[ -f "$file" ]]; then
            local filename
            filename=$(basename "$file")
            if [[ ! -f "${target_dir}/${filename}" ]]; then
                debug "Copy file ${filename} from ${source_dir} to ${target_dir}"
                cp "$file" "${target_dir}/${filename}"
                if [[ -n $owner_user ]]; then
                    owned_by "${target_dir}/${filename}" "$owner_user" "$owner_group"
                fi
            fi
        fi
    done
}

########################
# Checks whether a directory is empty or not
# arguments:
#   $1 - directory
# returns:
#   boolean
#########################
is_dir_empty() {
    local -r path="${1:?missing directory}"
    # Calculate real path in order to avoid issues with symlinks
    local -r dir="$(realpath "$path")"
    if [[ ! -e "$dir" ]] || [[ -z "$(ls -A "$dir")" ]]; then
        true
    else
        false
    fi
}

########################
# Checks whether a mounted directory is empty or not
# arguments:
#   $1 - directory
# returns:
#   boolean
#########################
is_mounted_dir_empty() {
    local dir="${1:?missing directory}"

    if is_dir_empty "$dir" || find "$dir" -mindepth 1 -maxdepth 1 -not -name ".snapshot" -not -name "lost+found" -exec false {} +; then
        true
    else
        false
    fi
}

########################
# Checks whether a file can be written to or not
# arguments:
#   $1 - file
# returns:
#   boolean
#########################
is_file_writable() {
    local file="${1:?missing file}"
    local dir
    dir="$(dirname "$file")"

    if [[ (-f "$file" && -w "$file") || (! -f "$file" && -d "$dir" && -w "$dir") ]]; then
        true
    else
        false
    fi
}

########################
# Relativize a path
# arguments:
#   $1 - path
#   $2 - base
# returns:
#   None
#########################
relativize() {
    local -r path="${1:?missing path}"
    local -r base="${2:?missing base}"
    pushd "$base" >/dev/null || exit
    realpath -q --no-symlinks --relative-base="$base" "$path" | sed -e 's|^/$|.|' -e 's|^/||'
    popd >/dev/null || exit
}

########################
# Configure permissions and ownership recursively
# Globals:
#   None
# Arguments:
#   $1 - paths (as a string).
# Flags:
#   -f|--file-mode - mode for directories.
#   -d|--dir-mode - mode for files.
#   -u|--user - user
#   -g|--group - group
# Returns:
#   None
#########################
configure_permissions_ownership() {
    local -r paths="${1:?paths is missing}"
    local dir_mode=""
    local file_mode=""
    local user=""
    local group=""

    # Validate arguments
    shift 1
    while [ "$#" -gt 0 ]; do
        case "$1" in
        -f | --file-mode)
            shift
            file_mode="${1:?missing mode for files}"
            ;;
        -d | --dir-mode)
            shift
            dir_mode="${1:?missing mode for directories}"
            ;;
        -u | --user)
            shift
            user="${1:?missing user}"
            ;;
        -g | --group)
            shift
            group="${1:?missing group}"
            ;;
        *)
            echo "Invalid command line flag $1" >&2
            return 1
            ;;
        esac
        shift
    done

    read -r -a filepaths <<<"$paths"
    for p in "${filepaths[@]}"; do
        if [[ -e "$p" ]]; then
            if [[ -n $dir_mode ]]; then
                find -L "$p" -type d -exec chmod "$dir_mode" {} \;
            fi
            if [[ -n $file_mode ]]; then
                find -L "$p" -type f -exec chmod "$file_mode" {} \;
            fi
            if [[ -n $user ]] && [[ -n $group ]]; then
                chown -LR "$user":"$group" "$p"
            elif [[ -n $user ]] && [[ -z $group ]]; then
                chown -LR "$user" "$p"
            elif [[ -z $user ]] && [[ -n $group ]]; then
                chgrp -LR "$group" "$p"
            fi
        else
            stderr_print "$p does not exist"
        fi
    done
}
