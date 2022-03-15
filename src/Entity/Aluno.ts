import { 
  Entity,
  Column, 
  BaseEntity, 
  PrimaryColumn, 
  ManyToMany,
  OneToOne,
  JoinTable,
  JoinColumn
} from "typeorm"

import Materia from "./Materia"
import Curso from "./Curso"

export enum Situacao {
  REGULAR = "Reguar",
  EM_RISCO = "Em risco",
  JUBILADO = "Jubilado"
}

@Entity()
export class Aluno extends BaseEntity {
  @PrimaryColumn()
  matricula: string

  @Column()
  email: string

  @Column()
  isBolsista: boolean

  @Column()
  nome: string

  @Column({
    type: "enum",
    enum: Situacao,
    default: Situacao.REGULAR
  })
  situacao: Situacao

  @Column({ type: "float" })
  rendimento: number

  @ManyToMany(() => Materia, materia => materia.codigo)
  @JoinTable()
  Materias: Materia[]

  @OneToOne(() => Curso)
  @JoinColumn()
  curso: Curso
}