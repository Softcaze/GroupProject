'use strict';

import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

import user from './routes/user.route';
import auth from './routes/auth.route';
import group from './routes/group.route';

import * as ejs from 'ejs';
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as dbConfig from "./common/db.config";
import * as session from "express-session";
import * as passport from "passport";
import { verifyJWT_MW } from './common/middleware';
import { PasspordStrategies } from './common/passport.config';

const app: express.Express = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.renderFile);
app.set('view engine', 'html');

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authentication,WWW-Authenticate');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', "true");

  // Pass to next layer of middleware
  next();
});

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
PasspordStrategies.initialize();

// API
app.use('*', verifyJWT_MW);

app.use('/_api/user', user);

app.use('/_api/auth', auth);

app.use('/_api/group', group);

//catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log("404 not found");
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
