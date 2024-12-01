import { spawn } from 'child_process'
import path from 'path'

import { __resource_dirname, configFilePath, CONSOLE_STARTUP_SCRIPT, LINUX_JRE } from './../utils/utils.js'

export function startConsole() {
  const scriptPath = path.join(__resource_dirname, CONSOLE_STARTUP_SCRIPT)

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
