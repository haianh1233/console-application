#!/bin/bash

VERSION="21.0.4+7"
ENCODED_VERSION="${VERSION//+/%2B}"
FORMATTED_VERSION="${VERSION//+/_}"
BASE_URL="https://github.com/adoptium/temurin21-binaries/releases/download/jdk-${ENCODED_VERSION}"
OUTPUT_DIR="./resources/jre"

LINUX_URL="${BASE_URL}/OpenJDK21U-jdk_x64_linux_hotspot_${FORMATTED_VERSION}.tar.gz"
MACOS_ARM_URL="${BASE_URL}/OpenJDK21U-jdk_aarch64_mac_hotspot_${FORMATTED_VERSION}.tar.gz"
WINDOWS_URL="${BASE_URL}/OpenJDK21U-jdk_x64_windows_hotspot_${FORMATTED_VERSION}.zip"

download_file() {
  local url=$1
  local output_file=$2

  echo "Downloading from: $url"
  if curl -L -o "$output_file" "$url"; then
    echo "Downloaded: $output_file"
  else
    echo "Failed to download: $url"
    exit 1
  fi
}

extract_and_rename() {
  local file=$1
  local target_dir=$2
  local platform_name=$3

  echo "Extracting $file..."
  case "$file" in
    *.tar.gz)
      tar -xzf "$file" -C "$target_dir"
      ;;
    *.zip)
      unzip -q "$file" -d "$target_dir"
      ;;
    *)
      echo "Unsupported file format: $file"
      exit 1
      ;;
  esac

  local extracted_dir
  extracted_dir=$(find "$target_dir" -mindepth 1 -maxdepth 1 -type d -name "jdk*")

  if [[ -z "$extracted_dir" ]]; then
    echo "Error: Could not find extracted directory in $target_dir"
    exit 1
  fi

  mv "$extracted_dir" "$target_dir/$platform_name"
  echo "Renamed directory $extracted_dir to $target_dir/$platform_name"

  rm -f "$file"
  echo "Deleted archive file: $file"
}

case "$(uname -s)" in
  Linux*)
    PLATFORM="linux"
    URL="$LINUX_URL"
    OUTPUT_FILE="${OUTPUT_DIR}/OpenJDK21U-jdk_x64_linux_hotspot_${FORMATTED_VERSION}.tar.gz"
    ;;
  Darwin*)
    PLATFORM="macos"
    if [[ "$(uname -m)" == "arm64" ]]; then
      URL="$MACOS_ARM_URL"
      OUTPUT_FILE="${OUTPUT_DIR}/OpenJDK21U-jdk_aarch64_mac_hotspot_${FORMATTED_VERSION}.tar.gz"
    else
      echo "Unsupported architecture for macOS: $(uname -m)"
      exit 1
    fi
    ;;
  CYGWIN*|MINGW*|MSYS*|Windows*)
    PLATFORM="windows"
    URL="$WINDOWS_URL"
    OUTPUT_FILE="${OUTPUT_DIR}/OpenJDK21U-jdk_x64_windows_hotspot_${FORMATTED_VERSION}.zip"
    ;;
  *)
    echo "Unsupported platform: $(uname -s)"
    exit 1
    ;;
esac

# Uncomment the following lines to test download and extraction for each platform
#PLATFORM="linux"
#URL="$LINUX_URL"
#OUTPUT_FILE="${OUTPUT_DIR}/OpenJDK21U-jdk_x64_linux_hotspot_${FORMATTED_VERSION}.tar.gz"
#echo "Testing download and extraction for $PLATFORM..."
#
#PLATFORM="macos"
#URL="$MACOS_ARM_URL"
#OUTPUT_FILE="${OUTPUT_DIR}/OpenJDK21U-jdk_aarch64_mac_hotspot_${FORMATTED_VERSION}.tar.gz"
#echo "Testing download and extraction for $PLATFORM..."
#
#PLATFORM="windows"
#URL="$WINDOWS_URL"
#OUTPUT_FILE="${OUTPUT_DIR}/OpenJDK21U-jdk_x64_windows_hotspot_${FORMATTED_VERSION}.zip"
#echo "Testing download and extraction for $PLATFORM..."

echo "Detected platform: $PLATFORM"

mkdir -p "$OUTPUT_DIR"

download_file "$URL" "$OUTPUT_FILE"

extract_and_rename "$OUTPUT_FILE" "$OUTPUT_DIR" "$PLATFORM"

echo "Download, extraction, and cleanup completed for $PLATFORM. Directory renamed to $OUTPUT_DIR/$PLATFORM."
