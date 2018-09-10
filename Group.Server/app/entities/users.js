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
const events_1 = require("./events");
const lt_user_event_1 = require("./lt_user_event");
const lt_user_group_1 = require("./lt_user_group");
const photo_comments_1 = require("./photo_comments");
const photo_likes_1 = require("./photo_likes");
let users = class users {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: "id"
    }),
    __metadata("design:type", String)
], users.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("bigint", {
        nullable: false,
        unique: true,
        name: "facebook_id"
    }),
    __metadata("design:type", String)
], users.prototype, "facebook_id", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 255,
        name: "firstname"
    }),
    __metadata("design:type", String)
], users.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 255,
        name: "lastname"
    }),
    __metadata("design:type", String)
], users.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 535,
        name: "profil_picture"
    }),
    __metadata("design:type", String)
], users.prototype, "profil_picture", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        unique: true,
        length: 255,
        name: "email"
    }),
    __metadata("design:type", String)
], users.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 255,
        name: "password"
    }),
    __metadata("design:type", String)
], users.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("datetime", {
        nullable: false,
        name: "creation_date"
    }),
    __metadata("design:type", Date)
], users.prototype, "creation_date", void 0);
__decorate([
    typeorm_1.Column("datetime", {
        nullable: false,
        name: "last_connection"
    }),
    __metadata("design:type", Date)
], users.prototype, "last_connection", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 255,
        name: "last_connection_ip"
    }),
    __metadata("design:type", String)
], users.prototype, "last_connection_ip", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 255,
        name: "home_adress"
    }),
    __metadata("design:type", String)
], users.prototype, "home_adress", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 255,
        name: "last_gps_location"
    }),
    __metadata("design:type", String)
], users.prototype, "last_gps_location", void 0);
__decorate([
    typeorm_1.OneToMany(type => events_1.events, events => events.id_author, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    __metadata("design:type", Array)
], users.prototype, "eventss", void 0);
__decorate([
    typeorm_1.OneToMany(type => lt_user_event_1.lt_user_event, lt_user_event => lt_user_event.id_user, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    __metadata("design:type", Array)
], users.prototype, "lt_user_events", void 0);
__decorate([
    typeorm_1.OneToOne(type => lt_user_group_1.lt_user_group, lt_user_group => lt_user_group.id_user, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    __metadata("design:type", lt_user_group_1.lt_user_group)
], users.prototype, "lt_user_group", void 0);
__decorate([
    typeorm_1.OneToMany(type => photo_comments_1.photo_comments, photo_comments => photo_comments.id_user, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    __metadata("design:type", Array)
], users.prototype, "photo_commentss", void 0);
__decorate([
    typeorm_1.OneToMany(type => photo_likes_1.photo_likes, photo_likes => photo_likes.id_user, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    __metadata("design:type", Array)
], users.prototype, "photo_likess", void 0);
users = __decorate([
    typeorm_1.Entity("users", { schema: "groupdb" }),
    typeorm_1.Index("unique_facebook_id", ["facebook_id",], { unique: true }),
    typeorm_1.Index("unique_email", ["email",], { unique: true })
], users);
exports.users = users;
//# sourceMappingURL=users.js.map