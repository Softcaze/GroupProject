import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {groups} from "./groups";


@Entity("albums",{schema:"groupdb" } )
@Index("fk_id_group_album",["idGroup",])
export class albums {

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
        

   
    @ManyToOne(type=>groups, groups=>groups.albumss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_group'})
    idGroup:groups | null;


    @Column("int",{ 
        nullable:false,
        name:"photo_count"
        })
    photo_count:number;
        
}
