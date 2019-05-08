'use strict';

import * as express from 'express';
import * as GroupController from "../controllers/group.controller";

const router = express.Router();

router.get('/getGroups', GroupController.getGroups);
router.post('/addGroup', GroupController.addGroup);
router.get('/getGroupSuggestion', GroupController.getGroupSuggestion);
router.get('/getGroupMembers', GroupController.getGroupMembers);
router.get('/countGroupMembers', GroupController.countGroupMembers);
router.get('/countGroupFollowers', GroupController.countGroupFollowers);
router.get('/getGroupFollowers', GroupController.getGroupFollowers);
router.get('/getGroupById', GroupController.getGroupById);

export default router;