import {MigrationInterface, QueryRunner} from "typeorm";

export class createView1650848312262 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE VIEW alunos_matriculados_materias
            AS
            SELECT a.nome, m.codigo
            FROM aluno_materias_materia amm 
            LEFT JOIN aluno a ON a.matricula = amm.alunoMatricula
            RIGHT JOIN materia m ON m.codigo = amm.materiaCodigo
            WHERE amm.alunoMatricula is not null
            ORDER BY amm.materiaCodigo;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP VIEW alunos_matriculados_materias")
    }

}
