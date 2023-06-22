import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from "typeorm";
import { Post } from "./post";
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({
        nullable:true
    })
    name: string;
  
    @Column({
        nullable:true
    })
    age: number;
  
    @Column({
        nullable:true
    })
    @CreateDateColumn()
    createdAt: Date;




  }