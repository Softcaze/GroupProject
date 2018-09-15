'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const UserController = require("../controllers/user.controller");
const router = express.Router();
router.get('/getUsers', UserController.getUsers);
exports.default = router;
//# sourceMappingURL=user.route.js.map