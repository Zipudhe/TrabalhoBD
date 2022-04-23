import {MigrationInterface, QueryRunner} from "typeorm";

export class seedRequisitos1650679940239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0090', 'CIC0004')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0229', 'CIC0004')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('MAT0026', 'MAT0025')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0197', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('EST0023', 'MAT0025')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('MAT0053', 'MAT0026')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0092', 'EST0023')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0092', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0124', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0182', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0198', 'CIC0197')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0199', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0093', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0097', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0135', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0202', 'CIC0198')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0101', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0104', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0104', 'CIC0099')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0161', 'MAT0034')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0203', 'EST0023')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0203', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0189', 'MAT0025')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0189', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0201', 'CIC0124')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0204', 'CIC0093')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0204', 'CIC0104')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0204', 'CIC0161')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0177', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0207', 'CIC0005')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0207', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0208', 'CIC0209')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0209', 'CIC0208')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0225', 'CIC0093')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0189', 'CIC0197')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0210', 'MTC0012')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0210', 'CIC0207')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0212', 'CIC0210')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0210', 'CIC0212')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0105', 'CIC0197')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0211', 'CIC0210')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0211', 'CIC0213')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0213', 'CIC0211')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0224', 'CIC0206')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0158', 'CIC0093')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0214', 'CIC0211')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0214', 'CIC0218')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0217', 'CIC0218')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0095', 'MAT0034')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0095', 'CIC0182')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0215', 'CIC0214')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0216', 'CIC0214')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('IFD0177', 'IFD0171')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('IFD0177', 'IFD0173')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('IFD0177', 'MAT0025')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0234', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0242', 'MAT0026')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0242', 'EST0023')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0242', 'MAT0031')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('MAT0027', 'MAT0026')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0176', 'MAT0039')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0176', 'CIC0088')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0040', 'CIC0004')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0177', 'MAT0027')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0039', 'CIC0004')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0235', 'MAT0026')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0235', 'CIC0090')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0235', 'EST0023')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0037', 'ENE0042')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0037', 'ENE0044')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0038', 'ENE0044')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0038', 'ENE0042')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0236', 'CIC0235')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0045', 'ENE0304')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0045', 'ENE0282')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0045', 'ENE0177')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0046', 'ENE0177')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0046', 'ENE0304')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('ENE0046', 'ENE0282')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('EPR0068', 'EST0023')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('EPR0059', 'EPR0068')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0243', 'CIC0246')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('CIC0099', 'CIC0094')`)
        await queryRunner.query(`INSERT INTO materia_prerequisito_materia(materiaCodigo, requisitoCodigo) VALUES('MAT0039', 'MAT0025')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("IF EXISTS DROP TABLE materia_prerequisito_materia")
    }

}
