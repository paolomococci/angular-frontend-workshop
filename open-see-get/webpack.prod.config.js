const path = require('path')
const baseConfig = require('./webpack.config')

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  ...baseConfig,
  output: {
    path: path.join(
      process.cwd(),
      'dist',
      'open-see-get'
    ),
    filename: 'main.js'
  }
}
