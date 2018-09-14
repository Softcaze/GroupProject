'use strict';

import * as express from "express";
import * as AuthController from '../controllers/auth.controller';
const router = express.Router();
const passport = require('passport');

// facebook login
router.post("/facebook", passport.authenticate("facebook-token", { session: false }), AuthController.authFacebook);

export default router;