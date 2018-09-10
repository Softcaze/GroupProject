import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {groups} from "./groups";


@Entity("albums",{schema:"groupdb"})
@Index("fk_id_group_album",["id_group",])
export class albums {

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
        

   
    @ManyToOne(type=>groups, groups=>groups.albumss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_group'})
    id_group:groups | null;


    @Column("int",{ 
        nullable:false,
        name:"photo_count"
        })
    photo_count:number;
        
}
