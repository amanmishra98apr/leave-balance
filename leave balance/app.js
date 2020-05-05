var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
dotenv.config();
var cors = require('cors');

var index = require('./routes/index');
var leaves = require('./routes/leaves');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser())

app.use('/', index);
//post api fetching leave detail using id
app.use('/leaves', leaves);

module.exports = app;
