import { EntityRepository, Repository } from "typeorm"
import { Materia } from "Entity/Materia"

@EntityRepository(Materia)
export class MateriaRepository extends Repository<Materia> {

  async getMateriaBycodigo(codigo: string ) {
    return this.query(
      `SELECT * from materia where materia.matricula = ${codigo}`
    )
    .then(materia => materia[0])
  }

  // Adicionar cursos pra poder adicionar materia já com curso cadastrado
  async createMateria(codigo: string, carga: number) {
    return this.query(
      `INSERT INTO 
      materia(codigo, carga)
      values("${codigo}", "${carga}");`
    )
    .then(() => this.getMateriaBycodigo(codigo))
  }

  listMaterias() {
    return this.query(
      `
        SELECT * from materia;
      `
    )
  }

  async updateMateria(materia: Materia, carga?: number) {
    const codigo = materia.codigo
    return this.query(`
      UPDATE materia
      SET ${codigo ? `codigo = ${codigo}` : ''},
      ${carga ? `carga = ${carga}` : ''},
      WHERE aluno.matricula = ${codigo}
    `)
    .then(() => this.getMateriaBycodigo(codigo))
  }

  deleteMateria(codigo: string) {
    return this.query(`
        DELETE FROM aluno WHERE aluno.matricula = ${codigo}
    `) 
  }
}