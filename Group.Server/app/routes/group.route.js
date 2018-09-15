'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const GroupController = require("../controllers/group.controller");
const router = express.Router();
router.get('/getGroups', GroupController.getGroups);
router.post('/addGroup', GroupController.addGroup);
router.get('/getGroupSuggestion', GroupController.getGroupSuggestion);
exports.default = router;
//# sourceMappingURL=group.route.js.map