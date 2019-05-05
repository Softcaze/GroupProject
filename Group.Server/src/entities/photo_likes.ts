import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {users} from "./users";
import {photos} from "./photos";


@Entity("photo_likes",{schema:"groupdb" } )
@Index("fk_like_id_photo_lt",["idPhoto",])
@Index("fk_like_id_user_lt",["idUser",])
export class photo_likes {

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
        

   
    @ManyToOne(type=>users, users=>users.photoLikess,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_user'})
    idUser:users | null;


   
    @ManyToOne(type=>photos, photos=>photos.photoLikess,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_photo'})
    idPhoto:photos | null;

}
