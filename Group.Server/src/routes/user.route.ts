'use strict';

const passport = require('passport');
import * as express from 'express';
import * as UserController from "../controllers/user.controller";
const passportConf = require('../common/passport.config');

const router = express.Router();

router.get('/getUsers', UserController.getAllUsers);
router.post('/addUser', UserController.saveUser);

router.post("/auth/facebook", passport.authenticate("facebook-token", { session: false }), UserController.authFacebook);

export default router;