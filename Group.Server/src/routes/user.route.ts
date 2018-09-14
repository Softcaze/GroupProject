'use strict';

const passport = require('passport');
import * as express from 'express';

import * as UserController from "../controllers/user.controller";
const passportConf = require('../common/passport.config');

const router = express.Router();

// user
router.get('/getUsers', UserController.getAllUsers);

export default router;