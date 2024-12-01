import path from 'path'

import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { FE_DIST_PATH } from '../utils/utils.js'

export function createProxy(config) {
  const expressApp = express()

  // Serve static files for the frontend
  expressApp.use(express.static(FE_DIST_PATH))

  const backendUrl = `http://localhost:${config.port}`
  const backendWsUrl = `ws://localhost:${config.port}`

  // Proxy configuration similar to Vite
  const proxyConfig = {
    '/api': `${backendUrl}/api`,
    '/admin/api': `${backendUrl}/admin/api`,
    '/auth': {
      target: `${backendUrl}/auth`,
      changeOrigin: true,
      secure: false,
      headers: {
        Forwarded: `host="localhost:${config.consolePort}";proto=http`,
      },
    },
    '/oauth': {
      target: `${backendUrl}/oauth`,
      changeOrigin: true,
      secure: false,
      headers: {
        Forwarded: `host="localhost:${config.consolePort}";proto=http`,
      },
    },
    '/data-masking/api': `${backendUrl}/data-masking/api`,
    '/console/api': `${backendUrl}/console/api`,
    '/console/ws': {
      target: backendWsUrl,
      changeOrigin: true,
      ws: true,
      secure: false,
    },
    '/cortex/api': `${backendUrl}/cortex/api`,
    '/fonts': `${backendUrl}/fonts`,
    '/governance/api': `${backendUrl}/governance/api`,
    '/monitoring/api': `${backendUrl}/monitoring/api`,
    '/public': `${backendUrl}/public`,
    '/platform/api': `${backendUrl}/platform/api`,
    '/prometheus/api/v1/targets': `${backendUrl}/prometheus/api/v1/targets`,
    '/prometheus/api': {
      target: `${backendUrl}/cortex/api`,
      changeOrigin: true,
    },
    '/clickhouse': `${backendUrl}/clickhouse`,
  }

  for (const [route, target] of Object.entries(proxyConfig)) {
    console.log(`Proxying ${route} to ${typeof target === 'string' ? target : target.target}`)
    if (typeof target === 'string') {
      expressApp.use(
        route,
        createProxyMiddleware({
          target,
        }),
      )
    } else if (typeof target === 'object') {
      expressApp.use(route, createProxyMiddleware(target))
    }
  }

  expressApp.get('*', (req, res) => {
    res.sendFile(path.join(FE_DIST_PATH, 'index.html'))
  })

  const server = expressApp.listen(config.consolePort, () => {
    console.log(`Proxy server started at http://localhost:${config.consolePort}`)
  })

  server.on('upgrade', (req, socket, head) => {
    const wsProxy = createProxyMiddleware(proxyConfig['/console/ws'])
    wsProxy.upgrade(req, socket, head)
  })

  server.on('error', err => {
    console.error(`Proxy server error: ${err.message}`)
    process.exit(1)
  })

  return server
}

export function stopProxy(server) {
  if (server) {
    server.close(() => {
      console.log('Proxy server stopped.')
    })
  }
}
