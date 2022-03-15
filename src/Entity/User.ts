import {Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Proprietario extends BaseEntity {

    @PrimaryGeneratedColumn()
    cpf: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;
}
