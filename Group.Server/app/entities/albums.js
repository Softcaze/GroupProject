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
const groups_1 = require("./groups");
let albums = class albums {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "bigint",
        name: "id"
    }),
    __metadata("design:type", String)
], albums.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        name: "name"
    }),
    __metadata("design:type", String)
], albums.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(type => groups_1.groups, groups => groups.albumss, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    typeorm_1.JoinColumn({ name: 'id_group' }),
    __metadata("design:type", groups_1.groups)
], albums.prototype, "idGroup", void 0);
__decorate([
    typeorm_1.Column("int", {
        nullable: false,
        name: "photo_count"
    }),
    __metadata("design:type", Number)
], albums.prototype, "photo_count", void 0);
albums = __decorate([
    typeorm_1.Entity("albums", { schema: "groupdb" }),
    typeorm_1.Index("fk_id_group_album", ["idGroup",])
], albums);
exports.albums = albums;
//# sourceMappingURL=albums.js.map