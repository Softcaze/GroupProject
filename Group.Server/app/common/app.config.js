"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV === 'test') {
    module.exports = {
        JWT_SECRET: 'groupcodesecret52',
        oauth: {
            facebook: {
                clientID: '251675342125195',
                clientSecret: 'f2a40024137f08159c75323b9494bbd8',
            },
        },
    };
}
else {
    module.exports = {
        JWT_SECRET: 'groupcodesecret52',
        oauth: {
            facebook: {
                clientID: '251675342125195',
                clientSecret: 'f2a40024137f08159c75323b9494bbd8',
            },
        },
    };
}
exports.default = module;
//# sourceMappingURL=app.config.js.map