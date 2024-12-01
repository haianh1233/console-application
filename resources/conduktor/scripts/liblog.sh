#!/usr/bin/env bash

set -e
#
# Library for logging functions

# Constants
RESET='\033[0m'
RED='\033[38;5;1m'
GREEN='\033[38;5;2m'
YELLOW='\033[38;5;3m'
MAGENTA='\033[38;5;5m'
CYAN='\033[38;5;6m'

# Functions

use_json() {
    local -r format="${CDK_ROOT_LOG_FORMAT:-text}"
    shopt -s nocasematch
    if [[ "$format" = "json" ]]; then
        true
    else
        false
    fi
}

use_color() {
    local -r bool="${CDK_ROOT_LOG_COLOR:-}"
    shopt -s nocasematch
    if [[ "$bool" = 1 || "$bool" =~ ^(yes|true)$ ]]; then
        true
    else
        false
    fi
}

to_json() {
  local -r level="${1:?missing level}"
  local message="${2:?missing message}"
  message="${message//\\/\\\\}" # escape backslashes in message
  local -r timestamp="$(TZ=${CDK_LOG_TIMEZONE} date --rfc-3339=seconds)"
  local -r module="${MODULE:-}"
  local -r json="{\"timestamp\":\"${timestamp}\",\"level\":\"${level}\",\"logger\":\"${module}\",\"message\":\"${message}\"}"
  echo "$json"
}

########################
# Print to STDOUT
# Arguments:
#   Message to print
# Returns:
#   None
#########################
stdout_print() {
    printf "%b\\n" "${*}" >&1
}

########################
# Print to STDERR
# Arguments:
#   Message to print
# Returns:
#   None
#########################
stderr_print() {
    printf "%b\\n" "${*}" >&2
}

########################
# Log message
# Arguments:
#   Message to log
# Returns:
#   None
#########################
log_err() {
  if use_json; then
    stdout_print "${*}"
  elif use_color; then
    stderr_print "${MAGENTA}$(TZ=${CDK_LOG_TIMEZONE} date +"%Y-%m-%dT%H:%M:%SZ") ${CYAN}[${MODULE:-}] ${RESET}${*}"
  else
    stderr_print "$(TZ=${CDK_LOG_TIMEZONE} date +"%Y-%m-%dT%H:%M:%SZ") [${MODULE:-}] ${*}"
  fi
}

########################
# Log message
# Arguments:
#   Message to log
# Returns:
#   None
#########################
log_out() {
  if use_json; then
    stdout_print "${*}"
  elif use_color; then
    stdout_print "${MAGENTA}$(TZ=${CDK_LOG_TIMEZONE} date +"%Y-%m-%dT%H:%M:%SZ") ${CYAN}[${MODULE:-}] ${RESET}${*}"
  else
    stdout_print "$(TZ=${CDK_LOG_TIMEZONE} date +"%Y-%m-%dT%H:%M:%SZ") [${MODULE:-}] ${*}"
  fi
}
########################
# Log an 'info' message
# Arguments:
#   Message to log
# Returns:
#   None
#########################
info() {
  if use_json; then
    log_out "$(to_json "INFO" "${*}")"
  elif use_color; then
    log_out "${GREEN}INFO${RESET} - ${*}"
  else
    log_out "INFO - ${*}"
  fi
}
########################
# Log message
# Arguments:
#   Message to log
# Returns:
#   None
#########################
warn() {
  if use_json; then
    log_out "$(to_json "WARN" "${*}")"
  elif use_color; then
    log_err "${YELLOW}WARN${RESET} - ${*}"
  else
    log_err "WARN - ${*}"
  fi
}
########################
# Log an 'error' message
# Arguments:
#   Message to log
# Returns:
#   None
#########################
error() {
  if use_json; then
    log_out "$(to_json "ERROR" "${*}")"
  elif use_color; then
    log_err "${RED}ERROR${RESET} - ${*}"
  else
    log_err "ERROR - ${*}"
  fi
}
########################
# Log a 'debug' message
# Globals:
#   DEBUG
# Arguments:
#   None
# Returns:
#   None
#########################
debug() {
    local bool="${CDK_DEBUG:-false}"
    # comparison is performed without regard to the case of alphabetic characters
    shopt -s nocasematch
    if [[ "$bool" = 1 || "$bool" =~ ^(yes|true)$ ]]; then

      if use_json; then
        log_out "$(to_json "DEBUG" "${*}")"
      elif use_color; then
        log_out "${MAGENTA}DEBUG${RESET} - ${*}"
      else
        log_out "DEBUG - ${*}"
      fi
    fi
}

########################
# Indent a string
# Arguments:
#   $1 - string
#   $2 - number of indentation characters (default: 4)
#   $3 - indentation character (default: " ")
# Returns:
#   None
#########################
indent() {
    local string="${1:-}"
    local num="${2:?missing num}"
    local char="${3:-" "}"
    # Build the indentation unit string
    local indent_unit=""
    for ((i = 0; i < num; i++)); do
        indent_unit="${indent_unit}${char}"
    done
    # shellcheck disable=SC2001
    # Complex regex, see https://github.com/koalaman/shellcheck/wiki/SC2001#exceptions
    echo "$string" | sed "s/^/${indent_unit}/"
}
