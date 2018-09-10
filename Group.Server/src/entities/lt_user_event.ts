import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {users} from "./users";
import {events} from "./events";


@Entity("lt_user_event",{schema:"groupdb"})
@Index("fk_id_event_lt",["id_event",])
@Index("fk_id_user_lt",["id_user",])
@Index("fk_id_state_lt",["state",])
export class lt_user_event {

    @PrimaryGeneratedColumn({
   
        name:"id"
        })
    id:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"creation_date"
        })
    creation_date:Date;
        

   
    @ManyToOne(type=>users, users=>users.lt_user_events,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_user'})
    id_user:users | null;


   
    @ManyToOne(type=>events, events=>events.lt_user_events,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_event'})
    id_event:events | null;


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
