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
        str += (Math.floor(Math.random() * Math.floor(10)));
    }
    return str;
};
exports.getExtension = function (name) {
    let tab;
    console.log(name);
    if (name != undefined) {
        tab = name.split(".");
        return tab[tab.length - 1];
    }
    return "png";
};
//# sourceMappingURL=functions.js.map