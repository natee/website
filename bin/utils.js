const glob = require("glob");
const path = require('path');

exports.getEntry = function () {

  // entry file
  let globPath = 'src/pages/**/main.js';

  // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
  let pathDir = 'src(\/|\\\\)pages(\/|\\\\)(.*?)(\/|\\\\)main.js'
  let files = glob.sync(globPath);
  let dirname, entries = [];
  for (let i = 0; i < files.length; i++) {
    // dirname = path.dirname(files[i])
    entries.push(files[i].replace(new RegExp('^' + pathDir), '$3'))
  }
  return entries
}

exports.addEntry = function () {
  let entryObj = {};
  let entries = exports.getEntry(); // get ['page-a','page-b']
  entries.forEach(item => {
    entryObj[item] = {
      // page 的入口
      entry: 'src/pages/' + item + '/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 ${outputDir}/login.html 的输出
      filename: item + '.html'
    }
  });
  return entryObj
}
