var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var apiRouting = require('./routes.js');
var broadcast = require('./broadcast');
broadcast('express app loaded', null);

//json persing middleware
app.use(bodyParser.json());

//cross-server
app.use(cors());


/*instead of writing restful web api get,put,post methods here, 
we just listen to 1 get method with path /api i.e localhost:3000/api */
/* RESTful APIs routing */
app.use('/api', apiRouting);

module.exports = app;