import path from 'path'

import { screen, app, BrowserWindow } from 'electron'
import squirrelStartup from 'electron-squirrel-startup'
import { updateElectronApp } from 'update-electron-app'

import { startConsole, stopConsole } from './services/conduktorConsole.js'
import { getConfig } from './config/configManager.js'
import { isPostgresHealthy, shutdownClusters, startPostgresqlClusters } from './services/postgresql.js'
import { createProxy, stopProxy } from './services/proxy.js'
import { __dirname } from './utils/utils.js'

let consoleProcess
let proxy

updateElectronApp({
  updateInterval: '5 minutes',
})

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

  window.webContents.on('did-finish-load', () => {
    window.setTitle(`Conduktor Console - v${app.getVersion()}`);
  });

  window.loadURL(`http://localhost:${config.consolePort}`)
}

async function appTeardown() {
  try {
    try {
      stopProxy(proxy);
    } catch (err) {
      console.error('Failed to stop proxy:', err);
    }
    proxy = null;

    try {
      stopConsole(consoleProcess);
    } catch (err) {
      console.error('Failed to stop console process:', err);
    }
    consoleProcess = null;

    try {
      await shutdownClusters();
    } catch (err) {
      console.error('Failed to shutdown clusters:', err);
    }
  } catch (err) {
    console.error('Unexpected error during teardown:', err);
  } finally {
    app.quit();
  }
}



app.whenReady().then(async () => {
  const consoleConfig = await getConfig()

  proxy = createProxy(consoleConfig)

  await startPostgresqlClusters(consoleConfig)
  const postgresHealthy = await isPostgresHealthy(consoleConfig)

  if (!postgresHealthy) {
    console.error('Postgres clusters are not healthy. Exiting...')
    appTeardown()
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
    appTeardown()
  }
})

app.on('before-quit', () => {
  appTeardown()
})

process.on('uncaughtException', err => {
  console.error(`Uncaught Exception: ${err.message}`)
  appTeardown()
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason)
  appTeardown()
})
