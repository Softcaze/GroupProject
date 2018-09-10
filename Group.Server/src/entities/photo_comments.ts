import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {users} from "./users";
import {photos} from "./photos";


@Entity("photo_comments",{schema:"groupdb"})
@Index("id_user",["id_user",])
@Index("id_photo",["id_photo",])
export class photo_comments {

    @PrimaryGeneratedColumn({
   
        name:"id"
        })
    id:string;
        

    @Column("text",{ 
        nullable:false,
        name:"comment"
        })
    comment:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"creation_date"
        })
    creation_date:Date;
        

   
    @ManyToOne(type=>users, users=>users.photo_commentss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_user'})
    id_user:users | null;


   
    @ManyToOne(type=>photos, photos=>photos.photo_commentss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_photo'})
    id_photo:photos | null;

}
