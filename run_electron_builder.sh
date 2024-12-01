#!/bin/bash

# This script builds an Electron app using Docker and copies the build artifacts to the host machine
# Electron Force has some issues with building on Fedora 41
# https://github.com/electron/forge/issues/3701

set -e

BUILD_DIR="$(pwd)/build"
DOCKER_IMAGE="electron-builder"
SCRIPT="./build_electron_app.sh"
DOCKERFILE="./electron-builder/Dockerfile"

mkdir -p "$BUILD_DIR"

echo "Building Docker image..."
docker build -t "$DOCKER_IMAGE" -f "$DOCKERFILE" .

echo "Running the container..."
docker run --name electron-builder-temp "$DOCKER_IMAGE" "$SCRIPT" "$@"

echo "Copying build artifacts..."
docker cp electron-builder-temp:/app/out "$BUILD_DIR"

echo "Cleaning up..."
docker rm electron-builder-temp

echo "Build completed. Output is available in: $BUILD_DIR"
