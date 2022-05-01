import { 
  Entity,
  Column, 
  BaseEntity, 
  PrimaryColumn, 
  OneToMany,
} from "typeorm"

import Rate from "./Rate";

@Entity()
export class Professor extends BaseEntity {

  @PrimaryColumn({
    length: 10
  })
  matricula: string;

  @Column()
  nome: string;

  @Column()
  email: string

  @Column()
  cargo: string

  @OneToMany(() => Rate, rate => rate.id )
  rate: Rate[]

}

export default Professor
