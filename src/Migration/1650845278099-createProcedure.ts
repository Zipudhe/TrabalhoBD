import {MigrationInterface, QueryRunner} from "typeorm";

export class createProcedure1650845278099 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            delimiter //
            CREATE PROCEDURE db_grade.avg_nota_professor (IN matricula_professor char(8))
            BEGIN
                SELECT AVG(r.nota) as media
                FROM rate as r
                JOIN professor as p on r.professorMatricula = matricula_professor and p.matricula = r.professorMatricula;
            END//
            delimiter ;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP PROCEDURE db_grade.avg_nota_professor;")
    }

}
