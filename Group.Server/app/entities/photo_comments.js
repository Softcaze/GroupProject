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
const photos_1 = require("./photos");
let photo_comments = class photo_comments {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "bigint",
        name: "id"
    }),
    __metadata("design:type", String)
], photo_comments.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: false,
        name: "comment"
    }),
    __metadata("design:type", String)
], photo_comments.prototype, "comment", void 0);
__decorate([
    typeorm_1.Column("datetime", {
        nullable: false,
        name: "creation_date"
    }),
    __metadata("design:type", Date)
], photo_comments.prototype, "creation_date", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_1.users, users => users.photoCommentss, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    typeorm_1.JoinColumn({ name: 'id_user' }),
    __metadata("design:type", users_1.users)
], photo_comments.prototype, "idUser", void 0);
__decorate([
    typeorm_1.ManyToOne(type => photos_1.photos, photos => photos.photoCommentss, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    typeorm_1.JoinColumn({ name: 'id_photo' }),
    __metadata("design:type", photos_1.photos)
], photo_comments.prototype, "idPhoto", void 0);
photo_comments = __decorate([
    typeorm_1.Entity("photo_comments", { schema: "groupdb" }),
    typeorm_1.Index("id_user", ["idUser",]),
    typeorm_1.Index("id_photo", ["idPhoto",])
], photo_comments);
exports.photo_comments = photo_comments;
//# sourceMappingURL=photo_comments.js.map