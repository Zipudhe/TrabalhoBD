import {Entity, PrimaryColumn, Column, BaseEntity, OneToMany } from "typeorm";
import Endereco  from "./Endereco";
import Veiculo  from "./Veiculo";

enum Sexo {
    MASCULINO = "Masculino",
    FEMININO =  "Feminino"
}

// Por padrão as colunas não são "nullable"
@Entity()
export class Proprietario extends BaseEntity {

    @PrimaryColumn()
    cpf: string;

    @Column()
    nome: string;

    @Column({
        type: "enum",
        enum: Sexo,
        default: Sexo.FEMININO,
        nullable: false
    })
    sexo: Sexo;


    @Column()
    dataNascimento: Date;

    @Column()
    Telefone: string;

    @OneToMany(type => Endereco, endereco => endereco.id)
    endereco: Endereco[]

    @OneToMany(type => Veiculo, veiculo => veiculo.placa)
    veculos: Veiculo[]
}


export default Proprietario