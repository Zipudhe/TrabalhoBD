import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"

@Entity()
export class Curso extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}

export default Curso
