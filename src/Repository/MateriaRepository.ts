import { EntityRepository, Repository } from "typeorm"
import { Materia } from "Entity/Materia"

@EntityRepository(Materia)
export class MateriaRepository extends Repository<Materia> {

  async getMateriaBycodigo(codigo: string ) {
    return this.query(
      `SELECT * from materia where materia.codigo  = '${codigo}';`
    )
    .then(materia => materia[0])
  }

  // Adicionar cursos pra poder adicionar materia já com curso cadastrado
  async createMateria(codigo: string, carga: number, prerequisito?: Materia) {
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

  async updateMateria(materia: Materia, carga?: number, prerequisito?: Materia) {
    const codigo = materia.codigo
    console.log(codigo)
    return this.query(`
      UPDATE materia
      SET ${carga ? `carga = '${carga}'` : ''}
      WHERE materia.codigo = '${codigo}'
    `)
    .then(() => this.getMateriaBycodigo(codigo))
  }

  async updateMateriaRequisitos(materia: Materia, prerequisitos: string[]) {
    const codigo = materia.codigo
    return this.query(`
      BEGIN bulk_update
      ${prerequisitos.map(req => {
        return `UPDATE materia_prequisito_materia SET materiaFilho=${req} WHERE materiaPai='${codigo}'`
      })}
      COMMIT bulk_update
    `)
  }

  deleteMateria(codigo: string) {

    return this.query(`
        DELETE FROM materia WHERE materia.codigo = '${codigo}'
    `) 
  }

  addPreRequisito(materia: Materia, requisito: Materia) {
    return this.query(`
      INSERT
      INTO materia_prerequisito_materia(materiaCodigo_1, materiaCodigo_2)
      VALUES('${materia.codigo}', '${requisito.codigo}')
    `)
  }

  removePreRequisito(materia: Materia, requisito: Materia) {
    return this.query(`
      DELETE
      FROM materia_prerequisito_materia
      WHERE materiaCodigo_1 = '${materia.codigo}' and materiaCodigo_2 = '${requisito.codigo}'
    `)
  }
}