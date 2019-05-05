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
let photo_likes = class photo_likes {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "bigint",
        name: "id"
    }),
    __metadata("design:type", String)
], photo_likes.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", {
        nullable: false,
        name: "creation_date"
    }),
    __metadata("design:type", Date)
], photo_likes.prototype, "creation_date", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_1.users, users => users.photoLikess, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    typeorm_1.JoinColumn({ name: 'id_user' }),
    __metadata("design:type", users_1.users)
], photo_likes.prototype, "idUser", void 0);
__decorate([
    typeorm_1.ManyToOne(type => photos_1.photos, photos => photos.photoLikess, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    typeorm_1.JoinColumn({ name: 'id_photo' }),
    __metadata("design:type", photos_1.photos)
], photo_likes.prototype, "idPhoto", void 0);
photo_likes = __decorate([
    typeorm_1.Entity("photo_likes", { schema: "groupdb" }),
    typeorm_1.Index("fk_like_id_photo_lt", ["idPhoto",]),
    typeorm_1.Index("fk_like_id_user_lt", ["idUser",])
], photo_likes);
exports.photo_likes = photo_likes;
//# sourceMappingURL=photo_likes.js.map