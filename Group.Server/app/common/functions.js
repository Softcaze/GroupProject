"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require('moment');
exports.getDateTimeNow = function () {
    return moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
};
exports.getNow = function () {
    return moment();
};
exports.getRandomString = function () {
    let str = "";
    for (var i = 0; i < 16; i++) {
        str += (Math.floor(Math.random() * Math.floor(20)));
    }
    return str;
};
exports.getExtension = function (fileName) {
    let tab;
    if (fileName != undefined) {
        tab = fileName.split(".");
        return tab[tab.length - 1];
    }
    return "png";
};
//# sourceMappingURL=functions.js.map