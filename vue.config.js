/*
  pages = {
    login: {
      // page 的入口
      entry: 'src/pages/login/main.js',
      // 模板来源
      template: 'public/index1.html',
      // 在 ${outputDir}/login.html 的输出
      filename: 'login.html',
    },
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index2.html',
      filename: 'index.html',
    },
    resume: {
      entry: 'src/pages/resume/main.js',
      template: 'public/index3.html',
      filename: 'resume.html',
    },
    presentation: {
      entry: 'src/pages/presentation/main.js',
      template: 'public/index4.html',
      filename: 'presentation.html',
    },
  },
*/

const CopyWebpackPlugin = require("copy-webpack-plugin");

const utils = require('./bin/utils');
const pages = utils.addEntry();
 
module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',

  css:{
    extract: true,
  },

  // publicPath: 'https://natee.github.io/website',
  publicPath: process.env.NODE_ENV === 'production' ? 'https://natee.github.io/website' : '/',
  
  // 修改默认dist为docs，方便github pages查找docs目录下的静态资源
  outputDir: 'docs',

  pages: pages,
 
  lintOnSave: false,

  configureWebpack: config => {
    config.plugins.push(
      new CopyWebpackPlugin([
        { from: "./static", to: 'static' }
      ])
    );
  },
}
