#!/usr/bin/env bash

#
# Library for http actions

# shellcheck disable=SC1091

# Functions

########################
# Curl URL in GET and check status code
# Discard output and log only errors
# Arguments:
#   $1 - url
#   $2 - status : expected status code
# Returns:
#   Curl output
#########################
curl_url() {
    local url="${1:?url is missing}"
    local status="${2:-200}"
    local extra_arg="${3:-}"

    ts=$(date +"%s")
    output_file="/tmp/curl-${ts}.out"
    touch "${output_file}"

    response_code=$(curl --request GET --silent --output "${output_file}" -w "%{http_code}\n" --show-error $extra_arg --url "${url}")
    exit_code=$?
    if [ $exit_code -ne 0 ]; then
        echo -e "Curl ${url} failed" >&2
        rm -f "${output_file}"
        exit $exit_code
    fi
    if [[ "${response_code}" -ne "${status}" ]]; then
        echo -e "Curl ${url} failed\n expected status ${status} got ${response_code}\n output: $(cat "${output_file}")" >&2
        rm -f "${output_file}"
        exit 1
    fi

    output=$(cat "${output_file}")
    rm -f "${output_file}"
    echo "${output}"
}
