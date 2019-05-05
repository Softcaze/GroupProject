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
const photo_comments_1 = require("./photo_comments");
const photo_likes_1 = require("./photo_likes");
let photos = class photos {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "bigint",
        name: "id"
    }),
    __metadata("design:type", String)
], photos.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 1000,
        name: "url"
    }),
    __metadata("design:type", String)
], photos.prototype, "url", void 0);
__decorate([
    typeorm_1.Column("datetime", {
        nullable: false,
        name: "creation_date"
    }),
    __metadata("design:type", Date)
], photos.prototype, "creation_date", void 0);
__decorate([
    typeorm_1.Column("bigint", {
        nullable: false,
        name: "id_author"
    }),
    __metadata("design:type", String)
], photos.prototype, "id_author", void 0);
__decorate([
    typeorm_1.Column("bigint", {
        nullable: false,
        name: "id_album"
    }),
    __metadata("design:type", String)
], photos.prototype, "id_album", void 0);
__decorate([
    typeorm_1.Column("int", {
        nullable: false,
        name: "comment_count"
    }),
    __metadata("design:type", Number)
], photos.prototype, "comment_count", void 0);
__decorate([
    typeorm_1.Column("int", {
        nullable: false,
        name: "like_count"
    }),
    __metadata("design:type", Number)
], photos.prototype, "like_count", void 0);
__decorate([
    typeorm_1.OneToMany(type => photo_comments_1.photo_comments, photo_comments => photo_comments.idPhoto, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    __metadata("design:type", Array)
], photos.prototype, "photoCommentss", void 0);
__decorate([
    typeorm_1.OneToMany(type => photo_likes_1.photo_likes, photo_likes => photo_likes.idPhoto, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    __metadata("design:type", Array)
], photos.prototype, "photoLikess", void 0);
photos = __decorate([
    typeorm_1.Entity("photos", { schema: "groupdb" })
], photos);
exports.photos = photos;
//# sourceMappingURL=photos.js.map