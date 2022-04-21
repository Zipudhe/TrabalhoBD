import Professor from "Entity/Professor";
import { EntityRepository, Repository } from "typeorm"


@EntityRepository(Professor)
export class ProfessorRepository extends Repository<Professor> {

  async getProfessorByMatricula(matricula: string) {
    console.log(matricula)
    return this.query(
      `SELECT * from professor where professor.matricula = '${matricula}'`
    )
    .then(profesor => profesor[0])
  }


  // TODO Adicionar parâmetro da matricula professor
  async createProfessor(matricula: string, nome: string, email: string, cargo: string) {
    return this.query(
      `INSERT INTO 
      professor(matricula, nome, email, cargo)
      values('${matricula}', '${nome}', '${email}', '${cargo}');`
    )
    .then(() => this.getProfessorByMatricula(matricula))
  }

  listProfessores() {
    return this.query(
      `
        SELECT * from professor;
      `
    )
  }

  async updateProfessor(professor: Professor, nome?: string, email?: string, cargo?: string) {
    const matricula = professor.matricula
    return this.query(`
      UPDATE professor
      SET ${ `matricula = '${matricula}'`}
      ${nome ? `,nome = '${nome}'` : ''}
      ${email ? `,email = '${email}'` : ''}
      ${cargo ? `,cargo = '${cargo}'` : ''}
      WHERE professor.matricula = '${matricula}'
    `)
    .then(() => this.getProfessorByMatricula(matricula))
  }

  deleteProfessor(matricula: string) {
    return this.query(`
        DELETE FROM professor WHERE professor.matricula = '${matricula}'
    `) 
  }

  addMateria(professor: Professor, materia: string) {
    return this.query(`
      INSERT 
      INTO materia_professores_professor(materiaCodigo, professorMatricula)
      VALUES('${materia}', '${professor.matricula}')
    `)
  }

  removerMateria(professor: Professor, materia: string) {
    return this.query(`
      DELETE FROM materia_professores_professor 
      WHERE professorMatricula = '${professor.matricula}' and materiaCodigo = '${materia}'
    `)
  }
}