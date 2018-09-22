'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require('multer');
const express = require("express");
const FileController = require("../controllers/file.controller");
const functions_1 = require("../common/functions");
const functions_2 = require("../common/functions");
const functions_3 = require("../common/functions");
var storageProfilePicture = multer.diskStorage({
    destination: "./file/profilePicture",
    filename: function (req, file, cb) {
        cb(null, functions_1.getNow() + "-" + functions_2.getRandomString() + "." + functions_3.getExtension(file.originalname));
    }
});
const router = express.Router();
router.post('/uploadFile', multer({ storage: storageProfilePicture }).single('file'), FileController.uploadedFile);
exports.default = router;
//# sourceMappingURL=file.route.js.map