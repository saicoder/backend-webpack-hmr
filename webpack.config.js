/* eslint-disable */

var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
var StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
  target: 'node',
  externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
  watch: true,
  entry: [
    'webpack/hot/poll?1000',
    './entrypoint',
  ],
  output: {
    path: __dirname + '/tmp',
    filename: 'server.dev.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devtool: 'sourcemap',
  plugins: [
    new StartServerPlugin('server.dev.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
  ],
}
