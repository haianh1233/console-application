#!/usr/bin/env bash

. /opt/conduktor/scripts/libhttp.sh >/dev/null 2>&1
. /opt/conduktor/scripts/conduktor-env.sh >/dev/null 2>&1


if [[ -f "${CDK_RUN_TLS_FILE_FLAG}" ]]; then
  # File flag for TLS is present, we should use HTTPS only
  echo -e "Trying HTTPS healthcheck"
  curl_url "https://localhost:${CDK_LISTENING_PORT}/api/health/ready" 200 "--insecure"
else
  # No file flag for TLS, we should use HTTP
  echo -e "Trying HTTP healthcheck"
  curl_url "http://localhost:${CDK_LISTENING_PORT}/api/health/ready" 200
fi


