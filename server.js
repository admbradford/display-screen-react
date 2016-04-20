'use strict'
process.title = "display-screen-react";

let express = require('express');
let http = require('http');

// create express app
let app = express();

// create http server using express app
let server = http.Server(app);

// if not production, start the hotloader
if (process.env.NODE_ENV !== 'production') {
	console.log('Starting hotloader. NODE_ENV: ' + process.env.NODE_ENV);
	require(__dirname + '/hotloader')(app);
}

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/src/private/html/index.html');
});

// start the server
server.listen(3000, 'localhost', (err) => {
	if (err) return console.log(err);
	console.log(`App running at http://localhost:3000`);
});

module.exports = app;