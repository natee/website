'use strict'

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: './static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://www.test.com/',
        changeOrigin: true
      }
    }
  },

  build: {
    assetsSubDirectory: './static',
    assetsPublicPath: '/'
  }
}
