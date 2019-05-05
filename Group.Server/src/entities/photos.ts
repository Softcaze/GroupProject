import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {photo_comments} from "./photo_comments";
import {photo_likes} from "./photo_likes";


@Entity("photos",{schema:"groupdb" } )
export class photos {

    @PrimaryGeneratedColumn({
        type:"bigint", 
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
        

   
    @OneToMany(type=>photo_comments, photo_comments=>photo_comments.idPhoto,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    photoCommentss:photo_comments[];
    

   
    @OneToMany(type=>photo_likes, photo_likes=>photo_likes.idPhoto,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    photoLikess:photo_likes[];
    
}
