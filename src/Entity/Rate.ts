import { 
  Entity, 
  Column, 
  BaseEntity, 
  PrimaryGeneratedColumn, 
  ManyToOne, 
} from "typeorm"

import Professor from "./Professor";

@Entity()
export class Rate extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: true })
  description: string;

  @Column()
  nota: number

  @ManyToOne(() => Professor, professor => professor.matricula)
  professor: Professor
}

export default Rate
