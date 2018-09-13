'use strict';

import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

import user from './routes/user.route';
import auth from './routes/auth.route';

import * as ejs from 'ejs';
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as dbConfig from "./common/db.config";
import * as passportConfig from "./common/passport.config";
import * as session from "express-session";
import * as passport from "passport";

const app: express.Express = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.renderFile);
app.set('view engine', 'html');

//uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'A!/@52D65OàùLD998D;.DS',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// API
app.use('/_api/user', user);

app.use('/_api/auth', auth);

//catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log(req);
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

//error handlers

//development error handler
//will print stacktrace
if (process.env.NODE_ENV === 'development') {
  app.use((err: Error, req, res, next) => {
    res.status(err['status'] || 500);
    res.render('error', {
      title: 'error',
      message: err.message,
      error: err
    });
  });
}

//production error handler
// no stacktrace leaked to user
app.use((err: Error, req, res, next) => {
  res.status(err['status'] || 500);
  res.render('error', {
    title: 'error',
    message: err.message,
    error: {}
  });
});

/**
 * Database connexion
 */
createConnection(dbConfig.dbOptions).then(async connection => {
  console.log("Connected to DB");
}).catch(error => console.log("TypeORM connection error: ", error));

export default app;
