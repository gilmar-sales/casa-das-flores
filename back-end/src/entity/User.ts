import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    isAdmin: boolean;

}
