import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {users} from "./users";
import {photos} from "./photos";


@Entity("photo_comments",{schema:"groupdb" } )
@Index("id_user",["idUser",])
@Index("id_photo",["idPhoto",])
export class photo_comments {

    @PrimaryGeneratedColumn({
        type:"bigint", 
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
        

   
    @ManyToOne(type=>users, users=>users.photoCommentss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_user'})
    idUser:users | null;


   
    @ManyToOne(type=>photos, photos=>photos.photoCommentss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_photo'})
    idPhoto:photos | null;

}
