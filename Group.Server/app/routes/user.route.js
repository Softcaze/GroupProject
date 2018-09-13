'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require('passport');
const express = require("express");
const UserController = require("../controllers/user.controller");
const passportConf = require('../common/passport.config');
const router = express.Router();
router.get('/getUsers', UserController.getAllUsers);
router.post('/addUser', UserController.saveUser);
router.post("/auth/facebook", passport.authenticate("facebook-token", { session: false }), UserController.authFacebook);
exports.default = router;
//# sourceMappingURL=user.route.js.map