import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {groups} from "./groups";
import {users} from "./users";
import {lt_user_event} from "./lt_user_event";


@Entity("events",{schema:"groupdb" } )
@Index("fk_id_group_event",["idGroup",])
@Index("id_author",["idAuthor",])
export class events {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"creation_date"
        })
    creation_date:Date;
        

    @Column("smallint",{ 
        nullable:false,
        name:"type"
        })
    type:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"location"
        })
    location:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"address"
        })
    address:string;
        

   
    @ManyToOne(type=>groups, groups=>groups.eventss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_group'})
    idGroup:groups | null;


   
    @ManyToOne(type=>users, users=>users.eventss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_author'})
    idAuthor:users | null;


   
    @OneToMany(type=>lt_user_event, lt_user_event=>lt_user_event.idEvent,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    ltUserEvents:lt_user_event[];
    
}
