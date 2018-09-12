'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const AuthController = require("../controllers/auth.controller");
const router = express.Router();
router.post("/facebook_connect", AuthController.setFacebookConnection);
exports.default = router;
//# sourceMappingURL=auth.route.js.map