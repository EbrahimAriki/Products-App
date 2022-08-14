// // app.js for bootstrap
// const express = require("express")
// const path = require('path')

// const app = express();

// app.use('/css', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/css')))
// app.use('/js', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/js')))
// app.use('/js', express.static(path.join(_dirname, 'node_modules/jquery/dist')))

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, 'views/index.html'))
// });

// app.listen(5000, () => {
//   console.log('Listening on port ' + 5000);
// });












var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

 module.exports = app;








 
// const   express     = require("express"),
//         request     = require("request"),
//         bodyParser  = require("body-parser"); 

// var     app         = express();

// app.use(express.static("public")); 
// app.set("view engine", "hbs"); 
// app.use(bodyParser.urlencoded({ extended: true })); 

// app.get("/moviesearch", function(req, res){
//     res.render("moviesearch");
// });


// app.get("/movieResults", function (req, res) {
//     var user = req.query.getValue;
//     var url = "http://www.omdbapi.com/?s=" + user + "&apikey=...";
//     request(url, function (error, response, body) {
//         var data = JSON.parse(body);
//         res.render("API_Results", { data: data });
//     });
// });