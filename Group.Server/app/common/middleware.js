"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controllers/auth.controller");
function verifyJWT_MW(req, res, next) {
    let token = (req.method === 'POST') ? req.body.token : req.query.token;
    console.log("token : " + token);
    auth_controller_1.verifyJWTToken(token)
        .then((decodedToken) => {
        req.user = decodedToken;
        next();
    })
        .catch((err) => {
        res.status(400)
            .json({ message: "Invalid auth token provided." });
    });
}
exports.verifyJWT_MW = verifyJWT_MW;
//# sourceMappingURL=middleware.js.map