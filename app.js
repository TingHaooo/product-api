require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// Import routers
var indexRouter = require('./routes/index');
var productsApiRouter = require('./routes/products-api');

var app = express();

// Connect database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Setup middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Setup routers
app.use('/', indexRouter);
app.use('/api', productsApiRouter);
// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  console.log(err);
  res.render('error', {err});
});

module.exports = app;
