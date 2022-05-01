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

  async getRateByDescription(description: string) {
    return this.query(
      `
        SELECT * from rate WHERE rate.description = '${description}'
      `
    ).then(rate => rate[0])
  }

  // TODO Adicionar parâmetro da matricula professor
  async createRate(description: string, nota: number, professor: string) {
    return this.query(
      `INSERT INTO 
      rate(description, nota, professorMatricula)
      values("${description}", ${nota}, "${professor}");`
    )
    .then(() => this.getRateByDescription(description))
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
      SET ${id ? `id = ${id}` : ''}
      ${description ? `,description = '${description}'` : ''}
      ${nota ? `,nota = ${nota}` : ''}
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