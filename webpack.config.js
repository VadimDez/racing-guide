/**
 * Created by Vadym Yatsyuk on 29.04.17
 */

var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:9000',
    'webpack/hot/only-dev-server',
    './app.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    open: true,
    disableHostCheck: true
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loaders: ['babel-loader?presets[]=es2015'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};