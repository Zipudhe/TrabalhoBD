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

@Entity()
export class Materia extends BaseEntity {

  @PrimaryColumn({
    length: 10
  })
  codigo: string;

  @Column()
  carga: number;

  @OneToMany(() => Materia, materia => materia.codigo)
  prerequisito: Materia[]


  @ManyToMany(() => Professor)
  @JoinTable()
  professores: Professor[]

}

export default Materia
