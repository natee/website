module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',

  css:{
    extract: true,
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/website' : '/',
  // 修改默认dist为docs，方便github pages查找docs目录下的静态资源
  outputDir: 'docs',

  pages: {
    login: {
      // page 的入口
      entry: 'src/pages/login/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 ${outputDir}/login.html 的输出
      filename: 'login.html',
    },
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    resume: {
      entry: 'src/pages/resume/main.js',
      template: 'public/index.html',
      filename: 'resume.html',
    },
  },

  lintOnSave: false
}