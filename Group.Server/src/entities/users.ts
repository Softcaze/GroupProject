import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {events} from "./events";
import {lt_user_event} from "./lt_user_event";
import {lt_user_group} from "./lt_user_group";
import {photo_comments} from "./photo_comments";
import {photo_likes} from "./photo_likes";


@Entity("users",{schema:"groupdb" } )
@Index("unique_facebook_id",["facebook_id",],{unique:true})
@Index("unique_email",["email",],{unique:true})
export class users {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("bigint",{ 
        nullable:false,
        unique: true,
        name:"facebook_id"
        })
    facebook_id:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"firstname"
        })
    firstname:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"lastname"
        })
    lastname:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:535,
        name:"profil_picture"
        })
    profil_picture:string;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"email"
        })
    email:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"password"
        })
    password:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"creation_date"
        })
    creation_date:Date;
        

    @Column("datetime",{ 
        nullable:false,
        name:"last_connection"
        })
    last_connection:Date;
        

    @Column("varchar",{ 
        nullable:false,
        name:"last_connection_ip"
        })
    last_connection_ip:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"home_adress"
        })
    home_adress:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"last_gps_location"
        })
    last_gps_location:string;
        

   
    @OneToMany(type=>events, events=>events.idAuthor,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    eventss:events[];
    

   
    @OneToMany(type=>lt_user_event, lt_user_event=>lt_user_event.idUser,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    ltUserEvents:lt_user_event[];
    

   
    @OneToMany(type=>lt_user_group, lt_user_group=>lt_user_group.idUser,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    ltUserGroups:lt_user_group[];
    

   
    @OneToMany(type=>photo_comments, photo_comments=>photo_comments.idUser,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    photoCommentss:photo_comments[];
    

   
    @OneToMany(type=>photo_likes, photo_likes=>photo_likes.idUser,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    photoLikess:photo_likes[];
    
}
