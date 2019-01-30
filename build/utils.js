const glob = require("glob");
const path = require('path');
const config = require('./config')

exports.assetsPath = function (prefix, _path = "") {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(prefix, assetsSubDirectory, _path)
}
