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
const users_1 = require("./users");
const groups_1 = require("./groups");
let lt_user_group = class lt_user_group {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "bigint",
        name: "id"
    }),
    __metadata("design:type", String)
], lt_user_group.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", {
        nullable: false,
        name: "creation_date"
    }),
    __metadata("design:type", Date)
], lt_user_group.prototype, "creation_date", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_1.users, users => users.ltUserGroups, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    typeorm_1.JoinColumn({ name: 'id_user' }),
    __metadata("design:type", users_1.users)
], lt_user_group.prototype, "idUser", void 0);
__decorate([
    typeorm_1.ManyToOne(type => groups_1.groups, groups => groups.ltUserGroups, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    typeorm_1.JoinColumn({ name: 'id_group' }),
    __metadata("design:type", groups_1.groups)
], lt_user_group.prototype, "idGroup", void 0);
__decorate([
    typeorm_1.Column("smallint", {
        nullable: false,
        name: "state"
    }),
    __metadata("design:type", Number)
], lt_user_group.prototype, "state", void 0);
__decorate([
    typeorm_1.Column("datetime", {
        nullable: false,
        name: "last_change_date"
    }),
    __metadata("design:type", Date)
], lt_user_group.prototype, "last_change_date", void 0);
lt_user_group = __decorate([
    typeorm_1.Entity("lt_user_group", { schema: "groupdb" }),
    typeorm_1.Index("unique_group_user", ["idUser", "idGroup",], { unique: true }),
    typeorm_1.Index("fk_id_group", ["idGroup",])
], lt_user_group);
exports.lt_user_group = lt_user_group;
//# sourceMappingURL=lt_user_group.js.map