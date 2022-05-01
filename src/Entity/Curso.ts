import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm"
import Materia from "./Materia";

@Entity()
export class Curso extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Materia, materia => materia.codigo)
  materias: Materia[]
}

export default Curso
