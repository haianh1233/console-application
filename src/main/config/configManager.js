import fs from 'fs'
import path from 'path'

import yaml from 'js-yaml'

import { configFilePath, CONSOLE_PLUGINS_DIR, __resource_dirname, findFreePort } from './../utils/utils.js'

const DEFAULT_BACKEND_PORT = 8080
const DEFAULT_FRONTEND_PORT = 5555

const consoleDefaultConfig = {
  port: DEFAULT_BACKEND_PORT,
  consolePort: DEFAULT_BACKEND_PORT,
  monitoring: {
    callback_url: `http://localhost:${DEFAULT_BACKEND_PORT}/monitoring/api/`,
    notifications_callback_url: `http://localhost:${DEFAULT_BACKEND_PORT}`,
    clusters_refresh_interval: 60,
  },
  database: {
    host: 'localhost',
    port: 5432,
    database: 'conduktor-console',
    username: 'conduktor',
    password: 'change_me',
    ssl_root_cert: null,
    options: {},
  },
  kafka_sql: {
    database: {
      host: 'localhost',
      port: 5433,
      database: 'conduktor-sql',
      username: 'conduktor',
      password: 'change_me',
      ssl_root_cert: null,
      options: {},
    },
  },
  auth: null,
  sso: null,
  license: null,
  platform: {},
  enable_product_metrics: true,
  lag_exporter: {
    frequency: 30,
    clusterParallelism: 1,
    indexerTimeout: 300,
  },
  metadata_indexer: {
    frequency: 30,
    clusterParallelism: 1,
    indexerTimeout: 300,
  },
  monitoring_config: {
    frequency: 30,
    clusterParallelism: 1,
    indexerTimeout: 300,
  },
  connect_indexer: {
    frequency: 30,
    clusterParallelism: 1,
    indexerTimeout: 300,
  },
  registry_indexer: {
    frequency: 30,
    clusterParallelism: 1,
    indexerTimeout: 300,
  },
  plugins: {
    dir: path.join(__resource_dirname, CONSOLE_PLUGINS_DIR),
  },
}

export async function getConfig() {
  const databasePort = await findFreePort(consoleDefaultConfig.database.port)
  const kafkaSqlPort = await findFreePort(databasePort + 1)
  const backendPort = await findFreePort(DEFAULT_BACKEND_PORT)
  const frontendPort = await findFreePort(DEFAULT_FRONTEND_PORT)

  console.log(`Allocated ports:`)
  console.log(`- Database port: ${databasePort}`)
  console.log(`- Kafka SQL port: ${kafkaSqlPort}`)
  console.log(`- Backend port: ${backendPort}`)
  console.log(`- Frontend port: ${frontendPort}`)

  consoleDefaultConfig.port = backendPort
  consoleDefaultConfig.consolePort = frontendPort
  consoleDefaultConfig.monitoring.callback_url = `http://localhost:${backendPort}/monitoring/api/`
  consoleDefaultConfig.monitoring.notifications_callback_url = `http://localhost:${backendPort}`

  saveConfig(consoleDefaultConfig)
  return yaml.load(fs.readFileSync(configFilePath, 'utf8'))
}

export function saveConfig(config) {
  const configDir = path.dirname(configFilePath)
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true })
  }

  fs.writeFileSync(configFilePath, yaml.dump(config), 'utf8')
}
