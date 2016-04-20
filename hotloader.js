'use strict'

let webpack = require('webpack');
let webpackConfig = require('./webpack.config');
let compiler = webpack(webpackConfig);

module.exports = (app) => {

	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}));

	app.use(require('webpack-hot-middleware')(compiler));
};