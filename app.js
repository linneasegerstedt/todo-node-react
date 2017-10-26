const express = require('express');
const morgan = require('morgan');
const serveFavicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const todoRouter = require('./api/todo.api');

app.use(cookieParser());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/todos', todoRouter);

app.get('/:name', function(req, res, next) {
  const name = req.params.name;
  res.send('bonjour ' + name);
});

//CORS middleware
// Add headers
// CORS header securiy
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Content-Type", "application/json");
  next();
});

module.exports = app;