import { 
  Entity,
  Column, 
  BaseEntity, 
  OneToMany,
  ManyToMany,
  JoinTable,
  PrimaryColumn
} from "typeorm"

import Professor from "./Professor";
import Curso from "./Curso"

@Entity()
export class Materia extends BaseEntity {

  @PrimaryColumn({
    length: 10
  })
  codigo: string;

  @Column()
  carga: number;

  @ManyToMany(() => Materia, materia => materia.codigo)
  @JoinTable()
  prerequisito: Materia[]


  @ManyToMany(() => Professor)
  @JoinTable()
  professores: Professor[]

  @ManyToMany(() => Curso, curso => curso.id)
  @JoinTable()
  cursos: Curso[]

}

export default Materia
