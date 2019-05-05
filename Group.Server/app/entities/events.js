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
const users_1 = require("./users");
const lt_user_event_1 = require("./lt_user_event");
let events = class events {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "bigint",
        name: "id"
    }),
    __metadata("design:type", String)
], events.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        name: "name"
    }),
    __metadata("design:type", String)
], events.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", {
        nullable: false,
        name: "creation_date"
    }),
    __metadata("design:type", Date)
], events.prototype, "creation_date", void 0);
__decorate([
    typeorm_1.Column("smallint", {
        nullable: false,
        name: "type"
    }),
    __metadata("design:type", Number)
], events.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        name: "location"
    }),
    __metadata("design:type", String)
], events.prototype, "location", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        name: "address"
    }),
    __metadata("design:type", String)
], events.prototype, "address", void 0);
__decorate([
    typeorm_1.ManyToOne(type => groups_1.groups, groups => groups.eventss, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    typeorm_1.JoinColumn({ name: 'id_group' }),
    __metadata("design:type", groups_1.groups)
], events.prototype, "idGroup", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_1.users, users => users.eventss, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    typeorm_1.JoinColumn({ name: 'id_author' }),
    __metadata("design:type", users_1.users)
], events.prototype, "idAuthor", void 0);
__decorate([
    typeorm_1.OneToMany(type => lt_user_event_1.lt_user_event, lt_user_event => lt_user_event.idEvent, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    __metadata("design:type", Array)
], events.prototype, "ltUserEvents", void 0);
events = __decorate([
    typeorm_1.Entity("events", { schema: "groupdb" }),
    typeorm_1.Index("fk_id_group_event", ["idGroup",]),
    typeorm_1.Index("id_author", ["idAuthor",])
], events);
exports.events = events;
//# sourceMappingURL=events.js.map