import fs from 'fs'
import path from 'path'

import pkg from 'pg'

import EmbeddedPostgres from '../libs/EmbeddedPostgres.js'
import { __cluster1, __cluster2, checkClusterHealth } from '../utils/utils.js'

const { Client } = pkg

const clusterPorts = []

export function isValidPostgresCluster(directory) {
  // Check if PG_VERSION exists in the directory
  const pgVersionFile = path.join(directory, 'PG_VERSION')
  return fs.existsSync(pgVersionFile)
}

const clusters = []

export async function startPostgresqlClusters(config) {
  await spawnCluster(
    __cluster1,
    config.database.username,
    config.database.password,
    config.database.database,
    config.database.port,
  )
  await spawnCluster(
    __cluster2,
    config.kafka_sql.database.username,
    config.kafka_sql.database.password,
    config.kafka_sql.database.database,
    config.kafka_sql.database.port,
  )
}

export async function isPostgresHealthy(config) {
  const maxRetries = 30
  const interval = 1000

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(`Health check attempt ${attempt}/${maxRetries}...`)

    // Check health of database cluster
    const databaseHealth = await checkClusterHealth(
      config.database.host,
      config.database.port,
      config.database.username,
      config.database.password,
      config.database.database,
    )

    // Check health of kafka_sql cluster
    const kafkaSqlHealth = await checkClusterHealth(
      config.kafka_sql.database.host,
      config.kafka_sql.database.port,
      config.kafka_sql.database.username,
      config.kafka_sql.database.password,
      config.kafka_sql.database.database,
    )

    if (databaseHealth && kafkaSqlHealth) {
      console.log('Both Postgres clusters are healthy.')
      return true
    }

    console.warn('One or more clusters are unhealthy. Retrying in 1 seconds...')
    await new Promise(resolve => setTimeout(resolve, interval))
  }

  console.error('Postgres clusters are not healthy after multiple attempts.')
  return false
}

async function spawnCluster(databaseDir, user, password, dbName, port) {
  console.log(
    `Spawning PostgreSQL cluster in ${databaseDir} with user ${user}, password ***, port ${port}, and database ${dbName}...`,
  )

  const isInitialized = isValidPostgresCluster(databaseDir)

  const pg = new EmbeddedPostgres({
    databaseDir,
    user,
    password,
    port,
    persistent: true,
  })

  if (!isInitialized) {
    console.log(`Initializing new PostgreSQL cluster in ${databaseDir}...`)
    await pg.initialise()
  } else {
    console.log(`Reusing existing PostgreSQL cluster in ${databaseDir}...`)
  }

  await pg.start()

  if (!isInitialized) {
    await pg.createDatabase(dbName)
  }

  const clusterInfo = { host: 'localhost', port, user, password, database: dbName }
  clusterPorts.push(clusterInfo)

  clusters.push(pg)
  return pg
}

export async function shutdownClusters() {
  console.log('Shutting down PostgreSQL clusters gracefully...')
  for (const pg of clusters) {
    try {
      await pg.stop()
      console.log('Cluster stopped successfully.')
    } catch (error) {
      console.error('Error stopping cluster:', error.message)
    }
  }
}
