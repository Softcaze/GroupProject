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
const albums_1 = require("./albums");
const events_1 = require("./events");
const lt_user_group_1 = require("./lt_user_group");
let groups = class groups {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "bigint",
        name: "id"
    }),
    __metadata("design:type", String)
], groups.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        name: "name"
    }),
    __metadata("design:type", String)
], groups.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", {
        nullable: false,
        name: "creation_date"
    }),
    __metadata("design:type", Date)
], groups.prototype, "creation_date", void 0);
__decorate([
    typeorm_1.Column("int", {
        nullable: false,
        default: () => "'1'",
        name: "type"
    }),
    __metadata("design:type", Number)
], groups.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: true,
        length: 535,
        name: "profil_picture"
    }),
    __metadata("design:type", String)
], groups.prototype, "profil_picture", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 535,
        name: "cover_picture"
    }),
    __metadata("design:type", String)
], groups.prototype, "cover_picture", void 0);
__decorate([
    typeorm_1.Column("int", {
        nullable: false,
        default: () => "'0'",
        name: "member_count"
    }),
    __metadata("design:type", Number)
], groups.prototype, "member_count", void 0);
__decorate([
    typeorm_1.Column("int", {
        nullable: false,
        default: () => "'0'",
        name: "follower_count"
    }),
    __metadata("design:type", Number)
], groups.prototype, "follower_count", void 0);
__decorate([
    typeorm_1.Column("int", {
        nullable: false,
        default: () => "'0'",
        name: "score"
    }),
    __metadata("design:type", Number)
], groups.prototype, "score", void 0);
__decorate([
    typeorm_1.OneToMany(type => albums_1.albums, albums => albums.idGroup, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    __metadata("design:type", Array)
], groups.prototype, "albumss", void 0);
__decorate([
    typeorm_1.OneToMany(type => events_1.events, events => events.idGroup, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    __metadata("design:type", Array)
], groups.prototype, "eventss", void 0);
__decorate([
    typeorm_1.OneToMany(type => lt_user_group_1.lt_user_group, lt_user_group => lt_user_group.idGroup, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    __metadata("design:type", Array)
], groups.prototype, "ltUserGroups", void 0);
groups = __decorate([
    typeorm_1.Entity("groups", { schema: "groupdb" })
], groups);
exports.groups = groups;
//# sourceMappingURL=groups.js.map