import { EntityRepository, Repository } from "typeorm"
import { Rate } from "Entity/Rate"

@EntityRepository(Rate)
export class RateRepository extends Repository<Rate> {

  async getRateById(id: number ) {
    return this.query(
      `SELECT * from rate where rate.id = ${id}`
    )
    .then(rate => rate[0])
  }

  // Adicionar cursos pra poder adicionar aluno já com curso cadastrado
  async createRate(id: number, description: number, nota: number) {
    return this.query(
      `INSERT INTO 
      rate(id, description, nota)
      values(${id}, "${description}", ${nota});`
    )
    .then(() => this.getRateById(id))
  }

  listRate() {
    return this.query(
      `
        SELECT * from rate;
      `
    )
  }

  async updateRate(rate: Rate, description?: string, nota?: number) {
    const id = rate.id
    return this.query(`
      UPDATE rate
      SET ${id ? `id = ${id}` : ''},
      ${description ? `description = ${description}` : ''},
      ${nota ? `nota = ${nota}` : ''},
      WHERE rate.id = ${id}
    `)
    .then(() => this.getRateById(id))
  }

  deleteRate(id: number) {
    return this.query(`
        DELETE FROM rate WHERE rate.id = ${id}
    `) 
  }
}