'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const UserController = require("../controllers/user.controller");
const router = express.Router();
router.get('/getUser', UserController.getUser);
router.get('/getUsers', UserController.getUsers);
router.get('/getNews', UserController.getNews);
exports.default = router;
//# sourceMappingURL=user.route.js.map