import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 3000;

// Instantiate express
const app = express();

//Instantiate webpack
const compiler = webpack(config);

// Configure express to use webpack
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

//Configure Route
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Configure listening on port
app.listen(port, function (err) {
	if (err) {
		console.log(err);
	}
	else {
		open('http://localhost:' + port);
	}
})
