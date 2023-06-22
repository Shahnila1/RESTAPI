import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from "typeorm";
import { User } from "./user";
  
  @Entity()
  export class Post {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({
        nullable:true
    })
    title: string;
  
    @Column({
        nullable:true
    })
    content: string;
  
    @Column({
        nullable:true
    })
    @CreateDateColumn()
    createdAt: Date;



  }