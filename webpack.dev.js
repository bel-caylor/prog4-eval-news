const HTMLWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  module: {
  	rules: [
  		{
  			test: '/\.js$/',
  			exclude: /node_modules/,
  			loader: 'babel-loader'
  		}
  	]
  },
  plugins: [
	new HTMLWebPackPlugin({
		template: './src/client/html/index.html',
		filename: 'index.html'
		}
	)
]
}
