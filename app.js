var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fetchRouter= require('./routes/fetch')
var subcategoryRouter= require('./routes/subcategory')
var displaycategoryRouter=require('./routes/DisplayCategory')
var companyRouter=require('./routes/company')
var vehicleRouter=require('./routes/vehicle')
var adminRouter=require('./routes/admin')
var offerRouter=require('./routes/offer')
var resultRouter=require('./routes/Result')
var homePageRouter=require('./routes/Homepage')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fetch',fetchRouter);
app.use('/subcategory',subcategoryRouter)
app.use('/displaycategory',displaycategoryRouter)
app.use('/company',companyRouter)
app.use('/vehicle',vehicleRouter)
app.use('/admin',adminRouter)
app.use('/offer',offerRouter)
app.use('/Result',resultRouter)
app.use('/Homepage',homePageRouter)

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
