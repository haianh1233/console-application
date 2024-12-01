#!/usr/bin/env bash

set -e

# Load logging library
# shellcheck disable=SC1090,SC1091
. /opt/conduktor/scripts/liblog.sh
. /opt/conduktor/scripts/libvalidations.sh
. /opt/conduktor/scripts/libfs.sh
. /opt/conduktor/scripts/libos.sh
. /opt/conduktor/scripts/conduktor-env.sh

display_welcome_banner() {
  if use_json; then
    # skip banner in json mode
    info "Welcome to Conduktor Platform"
  else
    if [[ -f "${CDK_DIR}/BANNER.txt" ]]; then
      info "$(cat "${CDK_DIR}/BANNER.txt")"
    fi
  fi

  info "Platform log level set to ${CDK_ROOT_LOG_LEVEL}"
}

display_modules_versions() {
  local versions=""
  if is_boolean_yes "${CDK_DEBUG:-false}"; then
    versions+="Conduktor Platform and modules versions:"
    versions+="\n  platform: ${PLATFORM_VERSION:-unknown} (sha:${PLATFORM_SHA1:-unknown})"
    versions+="\n  console: ${CONSOLE_VERSION:-unknown}"
    versions+="\n  console-web: ${CONSOLE_PLUS_WEB_VERSION:-unknown}"
    versions+="\n  debug-tools: ${DEBUG_TOOLS_VERSION:-unknown}"
  else
    versions+="Conduktor Platform version: ${PLATFORM_VERSION:-unknown}(${PLATFORM_SHA1:-unknown})"
  fi
  info "$versions"
  info "Running user: $(id)"
}

init_volume_dir() {
  info "Init volume directories if needed"

  # init config and run
  ensure_dir_exists "${CDK_APPS_CONF_DIR}" "$CDK_USER_UID" "$CDK_USER_GID"

  # init log dirs
  ensure_dir_exists "${CDK_LOGS_DIR}" "$CDK_USER_UID" "$CDK_USER_GID"

  # init loggers output dir
  ensure_dir_exists "${LOGGERS_OUT_CONF_DIR}" "$CDK_USER_UID" "$CDK_USER_GID"
  copy_if_missing "${LOGGERS_IN_CONF_DIR}" "${LOGGERS_OUT_CONF_DIR}" "$CDK_USER_UID" "$CDK_USER_GID"
}

platform_setup() {
  info "Setup Conduktor Platform"

  # init logger context
  export RUST_LOG="${PLATFORM_STARTUP_LOG_LEVEL}"
  previous_module_name="${MODULE:-}"
  export MODULE="platform-setup" # used for logger
  if use_json; then
    export ROOT_APPENDER=STDOUT_JSON
  elif use_color; then
    export ROOT_APPENDER=STDOUT_COLOR
    export CLICOLOR_FORCE=1
  else
    export ROOT_APPENDER=STDOUT
  fi

  ${CDK_BIN_DIR}/platform-entrypoint run \
    --input-config "${CDK_IN_CONF_FILE}" \
    --output-config-dir "${CDK_APPS_CONF_DIR}"

  # restore logger context
  export MODULE="${previous_module_name}" # restore previous module name
  unset ROOT_APPENDER
  unset CLICOLOR_FORCE
  unset RUST_LOG
}

start_console() {
  info "Start Console"

  export JAVA_OPTS="$CONSOLE_JAVA_OPTS"
  export ENV="$BE_CONFIG_ENV"
  export SENTRY_DSN="$BE_SENTRY_DSN"

  cd "${CONSOLE_ROOT_DIR}"
  exec ./bin/conduktor-console -w
}

startup_log() {
  # Split program output using double tee into stdout/stderr and startup.log file
  # Keep exit code of the program
  # see https://stackoverflow.com/a/692407
  $1 > >(tee -a "${CDK_LOGS_DIR}/startup.log") 2> >(tee -a "${CDK_LOGS_DIR}/startup.log" >&2)
}

_main () {
  trap 'echo "Exiting"; sleep 1' EXIT SIGINT SIGTERM # allow graceful termination of container and let tee finish

  export MODULE="entrypoint" # used for logger
  # create log dir
  ensure_dir_exists "${CDK_LOGS_DIR}" "$CDK_USER_UID" "$CDK_USER_GID"

  startup_log display_welcome_banner
  startup_log display_modules_versions
  startup_log init_volume_dir
  startup_log platform_setup

  info "Direct run mode enabled"
  start_console

}

_main "$@"
