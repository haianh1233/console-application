@echo off
set VERSION=21.0.4+7

:: Manually encode the + character to %2B
set ENCODED_VERSION=%VERSION:+=%25%2B%

:: Replace + with _ for formatted version
set FORMATTED_VERSION=%VERSION:+=_%

set BASE_URL=https://github.com/adoptium/temurin21-binaries/releases/download/jdk-%ENCODED_VERSION%
set OUTPUT_DIR=.\resources\jre
set URL=%BASE_URL%/OpenJDK21U-jdk_x64_windows_hotspot_%FORMATTED_VERSION%.zip
set OUTPUT_FILE=%OUTPUT_DIR%\OpenJDK21U-jdk_x64_windows_hotspot_%FORMATTED_VERSION%.zip

:: Create output directory
if not exist "%OUTPUT_DIR%" (
    mkdir "%OUTPUT_DIR%"
)

:: Download file
echo Downloading JRE from: %URL%
curl -L -o "%OUTPUT_FILE%" "%URL%"
if %ERRORLEVEL% neq 0 (
    echo Failed to download JRE
    exit /b 1
)

:: Extract file using 7z
echo Extracting JRE...
"%ProgramFiles%\7-Zip\7z.exe" x "%OUTPUT_FILE%" -o"%OUTPUT_DIR%" -y
if %ERRORLEVEL% neq 0 (
    echo Failed to extract JRE
    exit /b 1
)

:: Rename extracted directory
for /d %%I in ("%OUTPUT_DIR%\jdk*") do (
    rename "%%I" "windows"
)

:: Cleanup
del "%OUTPUT_FILE%"
echo JRE downloaded and extracted to: %OUTPUT_DIR%.
