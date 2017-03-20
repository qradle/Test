var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client.js'
  ],
  devtool: 'eval',
  output: {
    filename: 'bundle.js',
    path: __dirname + "/static",
    publicPath: '/static',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  //
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}
