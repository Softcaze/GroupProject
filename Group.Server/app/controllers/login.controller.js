"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("../repositories/user.repository");
exports.setFacebookConnection = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let usersRepo = new user_repository_1.UserRepo();
    console.log("Received Facebook Connection ==> POST");
    console.log(req.body);
    res.send("OK, connexion de " + req.body.name);
});
//# sourceMappingURL=login.controller.js.map