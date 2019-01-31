const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config')
const utils = require('./utils');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

let webpackConfig = {
  entry: './src/js/index.js',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: utils.assetsPath('', '/css/fonts/[name].[ext]')
        },
      },

      {
        test: /.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },

      {
        test: /\.(css|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        })
      },

      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join('media/[name].[hash:7].[ext]')
        }
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10,
          name: utils.assetsPath('', '/img/[name].[hash:7].[ext]'),
        }
      },

      {
        test: /\.html$/,
        use: 'html-withimg-loader',
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: utils.assetsPath('', '/css/app.[md5:contenthash:hex:7].css'),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // chunks:['docs'],
      template: './src/index.html',
      inject: true,
      // minify: {
      //   removeComments: process.env.NODE_ENV === 'production',
      //   collapseWhitespace: process.env.NODE_ENV === 'production',
      //   removeAttributeQuotes: process.env.NODE_ENV === 'production'
      // },
      chunksSortMode: 'dependency',
      favicon: './src/favicon.ico'
    })
  ],
  output: {
    path: path.resolve(__dirname, '../dist_pre'),
    filename: utils.assetsPath('', 'js/app.[hash:7].js'),
    chunkFilename: utils.assetsPath('', 'js/[id].[hash:7].js'),
  }
};

module.exports = webpackConfig;