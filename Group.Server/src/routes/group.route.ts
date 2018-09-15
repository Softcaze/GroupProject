'use strict';

import * as express from 'express';
import * as GroupController from "../controllers/group.controller";

const router = express.Router();

router.get('/getGroups', GroupController.getGroups);
router.post('/addGroup', GroupController.addGroup);

export default router;