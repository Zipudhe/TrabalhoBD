import { EntityRepository, Repository } from "typeorm"
import { Curso } from "Entity/Curso"

@EntityRepository(Curso)
export class CursoRepository extends Repository<Curso> {

  async getCursoById(id: number ) {
    return this.query(
      `SELECT * from curso where curso.id = ${id}`
    )
    .then(curso => curso[0])
  }

  async getCursoByNome(nome: string) {
    return this.query(
      `SELECT * FROM curso where curso.nome = '${nome}'`
    ).then(curso => curso[0])
  }

  // Adicionar cursos pra poder adicionar aluno já com curso cadastrado
  async createCurso(nome: string, materias?: string[]) {
    
    console.log(materias)
    const curso = await this.query(
      `INSERT INTO 
      curso(nome)
      values("${nome}");`
    )
    .then(() => this.getCursoByNome(nome))

    if(materias && materias != undefined) {
      console.log("Entrando em mateiras")
      materias.map(async(materia) => {
        return this.query(`
          INSERT INTO materia_cursos_curso(materiaCodigo, cursoId)
          values("${materia}", ${curso.codigo})
        `)
        .catch(err => console.error(err))
      })
    }

    return curso
  }

  listCursos() {
    return this.query(
      `
        SELECT * from curso;
      `
    )
  }

  async updateCurso(curso: Curso, nome?: string) {
    const id = curso.id
    return this.query(`
      UPDATE curso
      SET id = ${id}
      ${nome ? `,nome = '${nome}'` : ''}
      WHERE curso.id = ${id}
    `)
    .then(() => this.getCursoById(id))
  }

  deleteCurso(id: number) {
    return this.query(`
        DELETE FROM curso WHERE curso.id = ${id}
    `)
  }
}

export default CursoRepository