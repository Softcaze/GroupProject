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
const events_1 = require("./events");
let lt_user_event = class lt_user_event {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: "id"
    }),
    __metadata("design:type", String)
], lt_user_event.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", {
        nullable: false,
        name: "creation_date"
    }),
    __metadata("design:type", Date)
], lt_user_event.prototype, "creation_date", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_1.users, users => users.lt_user_events, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    typeorm_1.JoinColumn({ name: 'id_user' }),
    __metadata("design:type", users_1.users)
], lt_user_event.prototype, "id_user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => events_1.events, events => events.lt_user_events, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    typeorm_1.JoinColumn({ name: 'id_event' }),
    __metadata("design:type", events_1.events)
], lt_user_event.prototype, "id_event", void 0);
__decorate([
    typeorm_1.Column("smallint", {
        nullable: false,
        name: "state"
    }),
    __metadata("design:type", Number)
], lt_user_event.prototype, "state", void 0);
__decorate([
    typeorm_1.Column("datetime", {
        nullable: false,
        name: "last_change_date"
    }),
    __metadata("design:type", Date)
], lt_user_event.prototype, "last_change_date", void 0);
__decorate([
    typeorm_1.Column("json", {
        nullable: false,
        name: "params"
    }),
    __metadata("design:type", Object)
], lt_user_event.prototype, "params", void 0);
lt_user_event = __decorate([
    typeorm_1.Entity("lt_user_event", { schema: "groupdb" }),
    typeorm_1.Index("fk_id_event_lt", ["id_event",]),
    typeorm_1.Index("fk_id_user_lt", ["id_user",]),
    typeorm_1.Index("fk_id_state_lt", ["state",])
], lt_user_event);
exports.lt_user_event = lt_user_event;
//# sourceMappingURL=lt_user_event.js.map