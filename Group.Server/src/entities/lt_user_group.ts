import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {users} from "./users";
import {groups} from "./groups";


@Entity("lt_user_group",{schema:"groupdb" } )
@Index("unique_group_user",["idUser","idGroup",],{unique:true})
@Index("fk_id_group",["idGroup",])
export class lt_user_group {

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
        

   
    @ManyToOne(type=>users, users=>users.ltUserGroups,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_user'})
    idUser:users | null;


   
    @ManyToOne(type=>groups, groups=>groups.ltUserGroups,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_group'})
    idGroup:groups | null;


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
