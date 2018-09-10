import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("event_state",{schema:"groupdb"})
@Index("state",["state",],{unique:true})
export class event_state {

    @PrimaryGeneratedColumn({
   
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:255,
        name:"state"
        })
    state:string;
        
}
