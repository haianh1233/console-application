@echo off
setlocal

:: Variables
set VERSION=21.0.4+7
set ENCODED_VERSION=%VERSION:+=%25%2B%
set FORMATTED_VERSION=%VERSION:+=_%
set BASE_URL=https://github.com/adoptium/temurin21-binaries/releases/download/jdk-%ENCODED_VERSION%
set OUTPUT_DIR=.\resources\jre
set WINDOWS_URL=%BASE_URL%/OpenJDK21U-jdk_x64_windows_hotspot_%FORMATTED_VERSION%.zip
set OUTPUT_FILE=%OUTPUT_DIR%\OpenJDK21U-jdk_x64_windows_hotspot_%FORMATTED_VERSION%.zip

:: Create output directory
if not exist "%OUTPUT_DIR%" (
    mkdir "%OUTPUT_DIR%"
)

:: Download JRE
echo Downloading JRE from: %WINDOWS_URL%
curl -L -o "%OUTPUT_FILE%" "%WINDOWS_URL%"
if errorlevel 1 (
    echo Failed to download JRE from %WINDOWS_URL%
    exit /b 1
)
echo JRE downloaded to: %OUTPUT_FILE%

:: Extract JRE
echo Extracting JRE...
powershell -Command "Expand-Archive -Path '%OUTPUT_FILE%' -DestinationPath '%OUTPUT_DIR%' -Force"
if errorlevel 1 (
    echo Failed to extract JRE from %OUTPUT_FILE%
    exit /b 1
)

:: Rename extracted directory
for /d %%I in ("%OUTPUT_DIR%\jdk*") do (
    rename "%%I" "windows"
)

:: Cleanup
del "%OUTPUT_FILE%"
echo JRE archive deleted: %OUTPUT_FILE%

echo Download, extraction, and cleanup completed for Windows.
