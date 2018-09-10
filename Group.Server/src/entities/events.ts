import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {groups} from "./groups";
import {users} from "./users";
import {lt_user_event} from "./lt_user_event";


@Entity("events",{schema:"groupdb"})
@Index("fk_id_group_event",["id_group",])
@Index("id_author",["id_author",])
export class events {

    @PrimaryGeneratedColumn({
   
        name:"id"
        })
    id:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
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
        length:255,
        name:"location"
        })
    location:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"address"
        })
    address:string;
        

   
    @ManyToOne(type=>groups, groups=>groups.eventss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_group'})
    id_group:groups | null;


   
    @ManyToOne(type=>users, users=>users.eventss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_author'})
    id_author:users | null;


   
    @OneToMany(type=>lt_user_event, lt_user_event=>lt_user_event.id_event,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    lt_user_events:lt_user_event[];
    
}
