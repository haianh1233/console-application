import { spawn } from 'child_process'
import path from 'path'

import {
  __resource_dirname,
  configFilePath,
  CONSOLE_STARTUP_SCRIPT,
  LINUX_JRE, MACOS_JRE,
  WINDOWS_CONSOLE_STARTUP_SCRIPT, WINDOWS_JRE
} from './../utils/utils.js'

export function startConsole() {
  const platform = os.platform();

  let scriptPath;
  let bundledJvm;

  switch (platform) {
    case 'win32':
      scriptPath = path.join(__resource_dirname, WINDOWS_CONSOLE_STARTUP_SCRIPT);
      bundledJvm = path.join(__resource_dirname, WINDOWS_JRE);
      break;
    case 'darwin':
      scriptPath = path.join(__resource_dirname, CONSOLE_STARTUP_SCRIPT);
      bundledJvm = path.join(__resource_dirname, MACOS_JRE);
      break;
    case 'linux':
      scriptPath = path.join(__resource_dirname, CONSOLE_STARTUP_SCRIPT);
      bundledJvm = path.join(__resource_dirname, LINUX_JRE);
      break;
    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }

  const env = {
    ...process.env,
    CONSOLE_CONFIG_FILE: configFilePath,
    ENV: 'DEV',
    bundled_jvm: path.join(__resource_dirname, LINUX_JRE),
  }

  const consoleProcess = spawn(scriptPath, [], {
    stdio: 'inherit',
    shell: true,
    env,
  })

  consoleProcess.on('error', err => {
    console.error(`Failed to start console process: ${err.message}`)
  })

  consoleProcess.on('exit', code => {})

  return consoleProcess
}

export function stopConsole(consoleProcess) {
  if (consoleProcess) {
    consoleProcess.kill('SIGTERM')
  }
}
