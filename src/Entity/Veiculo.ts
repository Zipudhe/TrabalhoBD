import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm"

@Entity()
export class Veiculo extends BaseEntity {

  @PrimaryColumn({ length: 7 })
  placa: string;

  @Column()
  cor: string;

  @Column()
  anoFabricacao: Date;
}


export default Veiculo
