import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {photo_comments} from "./photo_comments";
import {photo_likes} from "./photo_likes";


@Entity("photos",{schema:"groupdb"})
export class photos {

    @PrimaryGeneratedColumn({
   
        name:"id"
        })
    id:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:1000,
        name:"url"
        })
    url:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"creation_date"
        })
    creation_date:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_author"
        })
    id_author:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_album"
        })
    id_album:string;
        

    @Column("int",{ 
        nullable:false,
        name:"comment_count"
        })
    comment_count:number;
        

    @Column("int",{ 
        nullable:false,
        name:"like_count"
        })
    like_count:number;
        

   
    @OneToMany(type=>photo_comments, photo_comments=>photo_comments.id_photo,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    photo_commentss:photo_comments[];
    

   
    @OneToMany(type=>photo_likes, photo_likes=>photo_likes.id_photo,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    photo_likess:photo_likes[];
    
}
