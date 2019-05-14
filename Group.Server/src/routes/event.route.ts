'use strict';

import * as express from 'express';
import * as EventController from "../controllers/event.controller";

const router = express.Router();

router.get('/getEventById', EventController.getEventById);

export default router;