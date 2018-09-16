'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const user_route_1 = require("./routes/user.route");
const auth_route_1 = require("./routes/auth.route");
const group_route_1 = require("./routes/group.route");
const ejs = require("ejs");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dbConfig = require("./common/db.config");
const session = require("express-session");
const passport = require("passport");
const middleware_1 = require("./common/middleware");
const passport_config_1 = require("./common/passport.config");
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.renderFile);
app.set('view engine', 'html');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authentication,WWW-Authenticate');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});
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
passport_config_1.PasspordStrategies.initialize();
app.use('*', middleware_1.verifyJWT_MW);
app.use('/_api/user', user_route_1.default);
app.use('/_api/auth', auth_route_1.default);
app.use('/_api/group', group_route_1.default);
app.use((req, res, next) => {
    console.log("404 not found");
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
if (process.env.NODE_ENV === 'development') {
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            title: 'error',
            message: err.message,
            error: err
        });
    });
}
app.use((err, req, res, next) => {
    res.status(err['status'] || 500);
    res.render('error', {
        title: 'error',
        message: err.message,
        error: {}
    });
});
typeorm_1.createConnection(dbConfig.dbOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {
    console.log("Connected to DB");
})).catch(error => console.log("TypeORM connection error: ", error));
exports.default = app;
//# sourceMappingURL=app.js.map