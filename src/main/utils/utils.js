import net from 'net'
import path from 'path'
import { fileURLToPath } from 'url'

import { app } from 'electron'
import isDev from 'electron-is-dev'
import pkg from 'pg'

const { Client } = pkg

export const __dirname = path.resolve(process.cwd())
export const __resource_dirname = isDev
  ? path.join(__dirname, '/resources')
  : path.join(app.getAppPath(), '/resources')

export const FE_DIST_PATH = path.join(__resource_dirname, '/fe/dist')

export const CONSOLE_STARTUP_SCRIPT = '/console/bin/conduktor-console'
export const WINDOWS_CONSOLE_STARTUP_SCRIPT = path.join('console', 'bin', 'conduktor-console.bat');
export const CONSOLE_PLUGINS_DIR = '/conduktor/plugins'

export const LINUX_JRE = '/jre/linux'
export const MACOS_JRE = '/jre/macos/Contents/Home'
export const WINDOWS_JRE = path.join('jre', 'windows')

export const userDataPath = app.getPath('userData')
export const configFilePath = isDev
  ? path.join(__dirname, 'config.yml')
  : path.join(userDataPath, '/conduktor-console/config.yml')
export const __cluster1 = isDev
  ? './data/db-cluster1'
  : path.join(userDataPath, '/data/db-cluster1')
export const __cluster2 = isDev
  ? './data/db-cluster2'
  : path.join(userDataPath, '/data/db-cluster2')

export async function findFreePort(startPort = 3000, limit = 100) {
  let currentPort = startPort
  const maxPort = startPort + limit

  async function checkPort(port) {
    return new Promise(resolve => {
      const server = net.createServer()
      server.unref()
      server.on('error', () => resolve(false))
      server.listen({ port }, () => {
        server.close(() => resolve(true))
      })
    })
  }

  while (currentPort < maxPort) {
    const isFree = await checkPort(currentPort)
    if (isFree) {
      return currentPort
    }
    currentPort++
  }

  throw new Error(`No free port found in the range ${startPort}-${maxPort - 1}`)
}

export async function checkClusterHealth(host, port, user, password, database) {
  const client = new Client({
    host,
    port,
    user,
    password,
    database,
  })

  try {
    await client.connect()
    await client.query('SELECT 1')
    console.log(`Cluster at ${host}:${port} (${database}) is healthy.`)
    return true
  } catch (error) {
    console.error(`Cluster at ${host}:${port} (${database}) health check failed:`, error.message)
    return false
  } finally {
    await client.end()
  }
}

export class BACKEND_PORT {}