const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const safeParser = require('postcss-safe-parser');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const config = require('./config');

const argv = require('yargs-parser')(process.argv)
// console.log('--------argv---------', argv.myopt);
const isTestProd = argv.myopt === 'test_build';

module.exports = merge(common, {
  output: {
    publicPath: isTestProd ? '/' : config.build.assetsPublicPath,
  },
  module: {
  },
  plugins: [
    new CleanWebpackPlugin(['dist_pre']),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: { 
        parser: safeParser,
        discardComments: {
          removeAll: true
        }
      }
    }),
  ]
});