import path from 'path'

import { screen, app, BrowserWindow } from 'electron'
import squirrelStartup from 'electron-squirrel-startup'

import { startConsole, stopConsole } from './services/conduktorConsole.js'
import { getConfig } from './config/configManager.js'
import { isPostgresHealthy, shutdownClusters, startPostgresqlClusters } from './services/postgresql.js'
import { createProxy, stopProxy } from './services/proxy.js'
import { __dirname } from './utils/utils.js'

let consoleProcess
let proxy

if (squirrelStartup) {
  app.quit();
}

async function createWindow(config) {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const window = new BrowserWindow({
    width,
    height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  })

  window.loadURL(`http://localhost:${config.consolePort}`)
}

app.whenReady().then(async () => {
  const consoleConfig = await getConfig()

  proxy = createProxy(consoleConfig)

  await startPostgresqlClusters(consoleConfig)
  const postgresHealthy = await isPostgresHealthy(consoleConfig)

  if (!postgresHealthy) {
    console.error('Postgres clusters are not healthy. Exiting...')
    app.quit()
    return
  }

  consoleProcess = startConsole()

  await createWindow(consoleConfig)

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow(consoleConfig)
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    stopProxy(proxy)
    shutdownClusters()
    stopConsole(consoleProcess)
    app.quit()
  }
})

app.on('before-quit', () => {
  stopProxy(proxy)
  shutdownClusters()
  stopConsole(consoleProcess)
})

process.on('uncaughtException', err => {
  console.error(`Uncaught Exception: ${err.message}`)
  app.quit()
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason)
  app.quit()
})
