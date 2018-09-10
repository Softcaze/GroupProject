import { Index, Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId } from "typeorm";
import { events } from "./events";
import { lt_user_event } from "./lt_user_event";
import { lt_user_group } from "./lt_user_group";
import { photo_comments } from "./photo_comments";
import { photo_likes } from "./photo_likes";


@Entity("users", { schema: "groupdb" })
@Index("unique_facebook_id", ["facebook_id",], { unique: true })
@Index("unique_email", ["email",], { unique: true })
export class users {

    @PrimaryGeneratedColumn({

        name: "id"
    })
    id: string;


    @Column("bigint", {
        nullable: false,
        unique: true,
        name: "facebook_id"
    })
    facebook_id: string;


    @Column("varchar", {
        nullable: false,
        length: 255,
        name: "firstname"
    })
    firstname: string;


    @Column("varchar", {
        nullable: false,
        length: 255,
        name: "lastname"
    })
    lastname: string;


    @Column("varchar", {
        nullable: false,
        length: 535,
        name: "profil_picture"
    })
    profil_picture: string;


    @Column("varchar", {
        nullable: false,
        unique: true,
        length: 255,
        name: "email"
    })
    email: string;


    @Column("varchar", {
        nullable: false,
        length: 255,
        name: "password"
    })
    password: string;


    @Column("datetime", {
        nullable: false,
        name: "creation_date"
    })
    creation_date: Date;


    @Column("datetime", {
        nullable: false,
        name: "last_connection"
    })
    last_connection: Date;


    @Column("varchar", {
        nullable: false,
        length: 255,
        name: "last_connection_ip"
    })
    last_connection_ip: string;


    @Column("varchar", {
        nullable: false,
        length: 255,
        name: "home_adress"
    })
    home_adress: string;


    @Column("varchar", {
        nullable: false,
        length: 255,
        name: "last_gps_location"
    })
    last_gps_location: string;



    @OneToMany(type => events, events => events.id_author, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    eventss: events[];



    @OneToMany(type => lt_user_event, lt_user_event => lt_user_event.id_user, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    lt_user_events: lt_user_event[];



    @OneToOne(type => lt_user_group, lt_user_group => lt_user_group.id_user, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    lt_user_group: lt_user_group | null;



    @OneToMany(type => photo_comments, photo_comments => photo_comments.id_user, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    photo_commentss: photo_comments[];



    @OneToMany(type => photo_likes, photo_likes => photo_likes.id_user, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    photo_likess: photo_likes[];

}
