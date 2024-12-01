#!/usr/bin/env bash

set -o errexit
set -o nounset

deprecate () {
  local old="${1:?old is missing}"
  local new="${2:?new is missing}"

  if [[ -n "${!old:-}" ]]; then
    echo "Deprecated $old is set, please use $new instead"
    export "$new"="${!old}"
  fi
}

lowercase() {
  echo "$1" | tr "[:upper:]" "[:lower:]"
}

log_appender() {
  local -r format="${CDK_ROOT_LOG_FORMAT:-}"
  local -r color="${CDK_ROOT_LOG_COLOR:-}"
  shopt -s nocasematch
  if [[ "$format" = "json" ]]; then
    echo "ASYNC_STDOUT_JSON"
  elif [[ "$color" = 1 || "$color" =~ ^(yes|true)$ ]]; then
    echo "ASYNC_STDOUT_COLOR"
  else
    echo "ASYNC_STDOUT"
  fi
}

# User and group
export CDK_USER_UID=${UID:-10001}
export CDK_USER_GID=0

# Base directories
export CDK_ROOT_DIR="/opt"
export CDK_DIR="${CDK_ROOT_DIR}/conduktor"
export CDK_BIN_DIR="${CDK_DIR}/bin"
export CDK_SCRIPTS_DIR="${CDK_DIR}/scripts"
export CDK_KEYS_DIR="${CDK_DIR}/keys"
export CDK_VOLUME_DIR="${CDK_VOLUME_DIR:-/var/conduktor}"
export CDK_LOGS_DIR="${CDK_VOLUME_DIR}/log"

# Config volume
export CDK_APPS_CONF_DIR="${CDK_VOLUME_DIR}/configs"

# Logging configuration
export LOGGERS_IN_CONF_DIR="${CDK_DIR}/loggers"
export LOGGERS_OUT_CONF_DIR="${CDK_APPS_CONF_DIR}/loggers"

export CDK_DEBUG="${CDK_DEBUG:-false}" # Enable debug mode
export CDK_SSL_DEBUG="${CDK_SSL_DEBUG:-false}" # Enable SSL debug logs
export CDK_ROOT_LOG_LEVEL="${CDK_ROOT_LOG_LEVEL:-INFO}" # Global log level for all components (DEBUG, INFO, WARN, ERROR)
export CDK_ROOT_LOG_FORMAT="${CDK_ROOT_LOG_FORMAT:-text}" # Choose JSON or text log format (default: text)
export CDK_ROOT_LOG_COLOR="${CDK_ROOT_LOG_COLOR:-true}" # enable or disable color in logs
export PLATFORM_STARTUP_LOG_LEVEL="${PLATFORM_STARTUP_LOG_LEVEL:-INFO}"

shopt -s nocasematch # Case insensitive matching
if [[ "${CDK_DEBUG}" =~ (true) || "${CDK_ROOT_LOG_LEVEL}" =~ (debug|trace) ]]; then
  export CDK_ROOT_LOG_LEVEL="DEBUG"
  export PLATFORM_STARTUP_LOG_LEVEL="DEBUG"
  export CDK_DEBUG="true"
fi
shopt -u nocasematch

# File flag used by healthcheck script to use correct protocol (HTTP / HTTPS)
# if file present use HTTPS, otherwise HTTP
export CDK_RUN_TLS_FILE_FLAG="$CDK_APPS_CONF_DIR/flag_tls"

# static config
export CDK_IN_CONF_FILE="${CDK_IN_CONF_FILE:-${CDK_DIR}/default-platform-config.yaml}"

# Server port config
export CDK_LISTENING_PORT=${CDK_LISTENING_PORT:-${PLATFORM_LISTENING_PORT:-8080}}

export CDK_GLOBAL_JAVA_OPTS="${CDK_GLOBAL_JAVA_OPTS:-}"

# Custom truststore
# TODO create truststore from pem certs
if [[ -n "${CDK_SSL_TRUSTSTORE_PATH:-}" ]]; then # CDK_SSL_TRUSTSTORE_PATH var exists and is not empty
  if [[ -s "${CDK_SSL_TRUSTSTORE_PATH:-}" ]]; then # CDK_SSL_TRUSTSTORE_PATH file exists and is not empty
    export CDK_GLOBAL_JAVA_OPTS="-Djavax.net.ssl.trustStore=${CDK_SSL_TRUSTSTORE_PATH}"

    if [[ -n "${CDK_SSL_TRUSTSTORE_PASSWORD:-}" ]]; then
      export CDK_GLOBAL_JAVA_OPTS="${CDK_GLOBAL_JAVA_OPTS} -Djavax.net.ssl.trustStorePassword=${CDK_SSL_TRUSTSTORE_PASSWORD}"
    fi

    if [[ -n "${CDK_SSL_TRUSTSTORE_TYPE:-}" ]]; then
      export CDK_GLOBAL_JAVA_OPTS="${CDK_GLOBAL_JAVA_OPTS} -Djavax.net.ssl.trustStoreType=${CDK_SSL_TRUSTSTORE_TYPE}"
    fi
  else
    echo "Custom truststore CDK_SSL_TRUSTSTORE_PATH=${CDK_SSL_TRUSTSTORE_PATH} file does not exist or is empty"
  fi
fi

if "${CDK_SSL_DEBUG}" == "true"; then
  export CDK_GLOBAL_JAVA_OPTS="${CDK_GLOBAL_JAVA_OPTS} -Djavax.net.debug=ssl"
fi

# JVM http proxy settings
export CDK_HTTP_PROXY_OPTS=""
if [[ -n "${CDK_HTTP_PROXY_HOST:-}" ]]; then
  export CDK_HTTP_PROXY_OPTS="${CDK_HTTP_PROXY_OPTS} -Dhttp.proxyHost=${CDK_HTTP_PROXY_HOST} -Dhttps.proxyHost=${CDK_HTTP_PROXY_HOST}"

  if [[ -n "${CDK_HTTP_NON_PROXY_HOSTS:-}" ]]; then
    export CDK_HTTP_PROXY_OPTS="${CDK_HTTP_PROXY_OPTS} -Dhttp.nonProxyHosts=${CDK_HTTP_NON_PROXY_HOSTS}"
  else
    # ignore localhost and 127.* by default if proxy is set
    export CDK_HTTP_PROXY_OPTS="${CDK_HTTP_PROXY_OPTS} -Dhttp.nonProxyHosts=localhost|127.*"
  fi

  if [[ -n "${CDK_HTTP_PROXY_PORT:-}" ]]; then
    export CDK_HTTP_PROXY_OPTS="${CDK_HTTP_PROXY_OPTS} -Dhttp.proxyPort=${CDK_HTTP_PROXY_PORT} -Dhttps.proxyPort=${CDK_HTTP_PROXY_PORT}"
  fi
fi
if [[ -n "${CDK_HTTP_PROXY_USER:-}" ]]; then
  export CDK_HTTP_PROXY_OPTS="${CDK_HTTP_PROXY_OPTS} -Dhttp.proxyUser=${CDK_HTTP_PROXY_USER} -Dhttps.proxyUser=${CDK_HTTP_PROXY_USER}"
fi
if [[ -n "${CDK_HTTP_PROXY_PASSWORD:-}" ]]; then
  export CDK_HTTP_PROXY_OPTS="${CDK_HTTP_PROXY_OPTS} -Dhttp.proxyPassword=${CDK_HTTP_PROXY_PASSWORD} -Dhttps.proxyPassword=${CDK_HTTP_PROXY_PASSWORD}"
fi

DEBUG_MEMORY_OPTS="-XX:+UnlockDiagnosticVMOptions -XX:NativeMemoryTracking=detail -XX:+PrintNMTStatistics"
GC_OPTS="-XX:+UseG1GC -XX:+UseStringDeduplication"
COMMON_MEMORY_OPTS="${GC_OPTS} -XshowSettings:system -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp -XX:ErrorFile=/tmp/console_jvm_%p_error.log"
if [[ "${CDK_DEBUG}" =~ (true) ]]; then
  # add memory debugging options if debug is enabled
  COMMON_MEMORY_OPTS="${COMMON_MEMORY_OPTS} ${DEBUG_MEMORY_OPTS}"
fi

export CONSOLE_MEMORY_OPTS=${CONSOLE_MEMORY_OPTS:-"-XX:+UseContainerSupport -XX:MaxRAMPercentage=70 -XX:MinRAMPercentage=70 -XX:MaxDirectMemorySize=100m ${COMMON_MEMORY_OPTS}"}

# devtools
export CONSOLE_ROOT_DIR="${CDK_ROOT_DIR}/console"
export CONSOLE_CONFIG_FILE="${CDK_APPS_CONF_DIR}/config.yml"
export AUTHENTICATOR_CONFIG_FILE="${CDK_APPS_CONF_DIR}/authenticator.yml"

export ADMIN_API_ENV="dev"
export DEVTOOLS_DB_POOL_SIZE="5"
export ADMIN_API_DB_POOL_SIZE="5"
deprecate "DEVTOOLS_JAVA_OPS" "CONSOLE_JAVA_OPTS"
export CONSOLE_LOGBACK_FILE="${LOGGERS_OUT_CONF_DIR}/console_logback.xml"
export CONSOLE_ROOT_LOG_LEVEL="${CONSOLE_ROOT_LOG_LEVEL:-${CDK_ROOT_LOG_LEVEL}}"
console_log_appender=$(log_appender)
export CONSOLE_ROOT_LOG_APPENDER="${CONSOLE_ROOT_LOG_APPENDER:-${console_log_appender}}"
export CDK_LOG_TIMEZONE=${CDK_LOG_TIMEZONE:-${TZ:-UTC}}
export BASE_CONSOLE_JAVA_OPTS="${CONSOLE_MEMORY_OPTS} ${CDK_GLOBAL_JAVA_OPTS} ${CDK_HTTP_PROXY_OPTS} -Dlogback.configurationFile=${CONSOLE_LOGBACK_FILE} -XX:+UnlockExperimentalVMOptions -Dnetworkaddress.cache.ttl=60 -XX:+AlwaysActAsServerClassMachine -Dfile.encoding=UTF-8 -Dpolyglot.engine.userResourceCache=/tmp/polyglot-cache"
export CONSOLE_JAVA_OPTS="${BASE_CONSOLE_JAVA_OPTS} ${CONSOLE_JAVA_OPTS:-}"
