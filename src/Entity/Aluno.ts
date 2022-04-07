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
  REGULAR = "Regular",
  EM_RISCO = "Em risco",
  JUBILADO = "Jubilado"
}

@Entity()
export class Aluno extends BaseEntity {
  @PrimaryColumn({
    length: 9
  })
  matricula: string

  @Column()
  email: string

  @Column({ default: false })
  isBolsista: boolean

  @Column()
  nome: string

  @Column({
    type: "enum",
    enum: Situacao,
    default: Situacao.REGULAR
  })
  situacao: Situacao

  @Column({ type: "float", default: 3 })
  rendimento: number

  @ManyToMany(() => Materia, materia => materia.codigo)
  @JoinTable()
  Materias: Materia[]

  @OneToOne(() => Curso)
  @JoinColumn()
  curso: Curso
}