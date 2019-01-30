const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const config = require('./config');

module.exports = merge(common, {
  output: {
    publicPath: config.dev.assetsPublicPath,
  },
  devServer: {
    // contentBase: '../dist',
    hot: true,
    proxy: config.dev.proxyTable,
    host: '0.0.0.0'
  },
  module: {
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('development')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

  ],
});