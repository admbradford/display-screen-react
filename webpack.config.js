var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
        bundle: [
			'eventsource-polyfill', // necessary for hot reloading with IE
			'webpack-hot-middleware/client',
			'./src/private/react/index.js'
		]
    },
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.jsx?/,
			loaders: ['babel'],
			include: path.join(__dirname, 'src/private')
		}]
	}
};