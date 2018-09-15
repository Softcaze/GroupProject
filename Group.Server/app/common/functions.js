"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require('moment');
exports.getDateTimeNow = function () {
    return moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
};
//# sourceMappingURL=functions.js.map