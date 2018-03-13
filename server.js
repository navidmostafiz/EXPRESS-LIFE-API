var http = require('http');
var app = require('./app');
var port = process.env.PORT || 5000;
var server = http.createServer(app);
var path = require('path');
console.log('server started with webpack');
//const express = require('express');
//const open = require('open');

// const webpack = require('webpack');
// const config = require('./webpack.config');
// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));
//app.use(require('webpack-hot-middleware')(compiler));

// app.get('*', function (request, response) {
//     response.sendFile(path.join(__dirname, 'build/index.html'));
// });

server.listen(port);
console.log("API SERVER STARTED ON PORT: ", port);