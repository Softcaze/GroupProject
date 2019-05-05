import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {albums} from "./albums";
import {events} from "./events";
import {lt_user_group} from "./lt_user_group";


@Entity("groups",{schema:"groupdb" } )
export class groups {

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
        

    @Column("int",{ 
        nullable:false,
        default: () => "'1'",
        name:"type"
        })
    type:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:535,
        name:"profil_picture"
        })
    profil_picture:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:535,
        name:"cover_picture"
        })
    cover_picture:string;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"member_count"
        })
    member_count:number;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"follower_count"
        })
    follower_count:number;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"score"
        })
    score:number;
        

   
    @OneToMany(type=>albums, albums=>albums.idGroup,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    albumss:albums[];
    

   
    @OneToMany(type=>events, events=>events.idGroup,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    eventss:events[];
    

   
    @OneToMany(type=>lt_user_group, lt_user_group=>lt_user_group.idGroup,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    ltUserGroups:lt_user_group[];
    
}
