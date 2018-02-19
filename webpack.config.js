const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlCriticalPlugin = require('html-critical-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js.*/,
      use: 'eslint-loader',
      exclude: /node_modules/,
    },{
      test: /\.js.*/,
      use: 'babel-loader',
      exclude: /node_modules/,
    },]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    // new HtmlCriticalPlugin({
    //   src: 'index.html',
    //   base: path.join(path.resolve(__dirname), 'public/'),
    //   extract: true,
    //   inline: true,
    //   minify: true,
    //   dest: 'index.html',
    //   penthouse: {
    //     blockJSRequests: false,
    //   },
    // }),
  ]
}
