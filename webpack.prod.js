const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client/index.js',
  mode: 'production',
  output: {
    libraryTarget: 'var',
    library: 'Client'
  },
  module: {
  	rules: [
  		{
  			test: '/\.js$/',
  			exclude: /node_modules/,
  			loader: 'babel-loader'
  		},
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
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
};
