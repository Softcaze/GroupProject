import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {users} from "./users";
import {groups} from "./groups";


@Entity("lt_user_group",{schema:"groupdb"})
@Index("unique_group_user",["id_user","id_group",],{unique:true})
@Index("fk_id_group",["id_group",])
export class lt_user_group {

    @PrimaryGeneratedColumn({
   
        name:"id"
        })
    id:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"creation_date"
        })
    creation_date:Date;
        

   
    @OneToOne(type=>users, users=>users.lt_user_group,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_user'})
    id_user:users | null;


   
    @OneToOne(type=>groups, groups=>groups.lt_user_group,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_group'})
    id_group:groups | null;


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
        
}
