/*
    ./webpack.config.js
*/
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, './index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
				test: /\.scss?$/,
				loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
			}
    ]
  },
  plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin('style.css')]
}