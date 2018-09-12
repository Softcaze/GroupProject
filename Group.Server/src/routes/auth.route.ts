'use strict';

import * as express from "express";
import * as AuthController from '../controllers/auth.controller';
const router = express.Router();

// facebook login
router.post("/facebook_connect", AuthController.setFacebookConnection);

export default router;