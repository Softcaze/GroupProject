'use strict';

const multer = require('multer');
import * as express from 'express';
import * as FileController from "../controllers/file.controller";
import { getNow } from "../common/functions";
import { getRandomString } from "../common/functions";
import { getExtension } from "../common/functions";

var storage = multer.diskStorage({
    destination: "./file/profilePicture",
    filename: function (req, file, cb) {
        cb(null, getNow() + "-" + getRandomString() + "." + getExtension(file.originalname));
    }
})

const router = express.Router();

router.post('/uploadFile', multer({ storage: storage }).single('file'), FileController.uploadedFile);

export default router;