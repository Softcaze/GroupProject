"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let user_state = class user_state {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "int",
        name: "id"
    }),
    __metadata("design:type", Number)
], user_state.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        unique: true,
        name: "state"
    }),
    __metadata("design:type", String)
], user_state.prototype, "state", void 0);
user_state = __decorate([
    typeorm_1.Entity("user_state", { schema: "groupdb" }),
    typeorm_1.Index("state", ["state",], { unique: true })
], user_state);
exports.user_state = user_state;
//# sourceMappingURL=user_state.js.map