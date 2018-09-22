'use strict';

import * as express from 'express';
import * as UserController from "../controllers/user.controller";

const router = express.Router();

// user
router.get('/getUser', UserController.getUser);
router.get('/getUsers', UserController.getUsers);
router.get('/getNews', UserController.getNews);

export default router;