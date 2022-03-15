import { 
  Entity,
  Column, 
  BaseEntity, 
  PrimaryGeneratedColumn, 
  OneToMany,
  ManyToMany,
  JoinTable
} from "typeorm"

import Professor from "./Professor";

@Entity()
export class Materia extends BaseEntity {

  @PrimaryGeneratedColumn()
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
