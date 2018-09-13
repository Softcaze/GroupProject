'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const AuthController = require("../controllers/auth.controller");
const router = express.Router();
const passport = require('passport');
router.post("/facebook_connect", AuthController.setFacebookConnection);
router.post("/facebook", passport.authenticate("facebook-token", { session: false }), AuthController.authFacebook);
exports.default = router;
//# sourceMappingURL=auth.route.js.map