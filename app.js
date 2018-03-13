var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var apiRouting = require('./routes.js');

// view engine setup
// app.set('views', path.join(__dirname, '../views'));
// app.set('view engine', 'pug');

//json persing middleware
app.use(bodyParser.json());


/*instead of writing restful web api get,put,post methods here, 
we just listen to 1 get method with path /api i.e localhost:3000/api */
/* RESTful APIs routing */
app.use('/api', apiRouting);

module.exports = app;