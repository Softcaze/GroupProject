import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {users} from "./users";
import {photos} from "./photos";


@Entity("photo_likes",{schema:"groupdb"})
@Index("fk_like_id_photo_lt",["id_photo",])
@Index("fk_like_id_user_lt",["id_user",])
export class photo_likes {

    @PrimaryGeneratedColumn({
   
        name:"id"
        })
    id:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"creation_date"
        })
    creation_date:Date;
        

   
    @ManyToOne(type=>users, users=>users.photo_likess,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_user'})
    id_user:users | null;


   
    @ManyToOne(type=>photos, photos=>photos.photo_likess,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_photo'})
    id_photo:photos | null;

}
