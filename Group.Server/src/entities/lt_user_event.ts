import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {users} from "./users";
import {events} from "./events";


@Entity("lt_user_event",{schema:"groupdb" } )
@Index("fk_id_event_lt",["idEvent",])
@Index("fk_id_user_lt",["idUser",])
@Index("fk_id_state_lt",["state",])
export class lt_user_event {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"creation_date"
        })
    creation_date:Date;
        

   
    @ManyToOne(type=>users, users=>users.ltUserEvents,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_user'})
    idUser:users | null;


   
    @ManyToOne(type=>events, events=>events.ltUserEvents,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_event'})
    idEvent:events | null;


    @Column("smallint",{ 
        nullable:false,
        name:"state"
        })
    state:number;
        

    @Column("datetime",{ 
        nullable:false,
        name:"last_change_date"
        })
    last_change_date:Date;
        

    @Column("json",{ 
        nullable:false,
        name:"params"
        })
    params:Object;
        
}
