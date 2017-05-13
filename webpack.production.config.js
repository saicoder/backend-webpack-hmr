/* eslint-disable */

var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
  entry: [
    './entrypoint',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'server.js',
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
    new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
  ]
}
