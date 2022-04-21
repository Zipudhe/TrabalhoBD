import { EntityRepository, Repository } from "typeorm"
import { Aluno, Situacao } from "Entity/Aluno"

@EntityRepository(Aluno)
export class AlunoRepository extends Repository<Aluno> {

  async getAlunoByMatricula(matricula: string ) {
    console.log(matricula)
    return this.query(
      `SELECT * from aluno where aluno.matricula = '${matricula}'`
    )
    .then(aluno => aluno[0])
  }

  // Adicionar cursos pra poder adicionar aluno já com curso cadastrado
  async createAluno(matricula: string, email: string, nome: string, situacao: Situacao, curso?: number) {
    
    return this.query(
      `INSERT INTO 
      aluno(matricula, email, nome, situacao)
      values("${matricula}", "${email}", "${nome}", "${situacao}");`
    )
    .then(() => this.getAlunoByMatricula(matricula))
  }

  listAlunos() {
    return this.query(
      `
        SELECT * from aluno;
      `
    )
  }

  async updateAluno(aluno: Aluno, nome?: string, situacao?: Situacao, curso?: number) {
    const matricula = aluno.matricula
    return this.query(`
      UPDATE aluno
      SET matricula = '${matricula}'
      ${nome ? `,nome = '${nome}'` : ''}
      ${situacao ? `,situacao = '${situacao}'` : ''}
      ${curso ? `,curso = ${curso}` : ''}
      WHERE aluno.matricula = '${matricula}'
    `)
    .then(() => this.getAlunoByMatricula(matricula))
  }

  deleteAluno(matricula: string) {
    return this.query(`
        DELETE FROM aluno WHERE aluno.matricula = ${matricula}
    `) 
  }

  subscribeAluno(aluno: Aluno, cursoId: number) {
    return this.query(`
      UPDATE aluno
      SET cursoId = ${cursoId}
      WHERE aluno.matricula = '${aluno.matricula}'
    `)
  }

  addMateria(aluno: Aluno, codigoMateria: string) {
    return this.query(`
      INSERT INTO
      aluno_materias_materia(alunoMatricula, materiaCodigo)
      VALUES('${aluno.matricula}', '${codigoMateria}')
    `)
  }
}