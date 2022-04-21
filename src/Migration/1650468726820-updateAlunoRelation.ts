import {MigrationInterface, QueryRunner} from "typeorm";

export class updateAlunoRelation1650468726820 implements MigrationInterface {
    name = 'updateAlunoRelation1650468726820'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`materia_prerequisito_materia\` (\`materiaPai\` varchar(10) NOT NULL, \`materiaFilho\` varchar(10) NOT NULL, INDEX \`IDX_f7b282f12697090a17bea981a6\` (\`materiaPai\`), INDEX \`IDX_db2703c1207a629547cd32ab29\` (\`materiaFilho\`), PRIMARY KEY (\`materiaPai\`, \`materiaFilho\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`materia_prerequisito_materia\` ADD CONSTRAINT \`FK_f7b282f12697090a17bea981a66\` FOREIGN KEY (\`materiaPai\`) REFERENCES \`materia\`(\`codigo\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`materia_prerequisito_materia\` ADD CONSTRAINT \`FK_db2703c1207a629547cd32ab295\` FOREIGN KEY (\`materiaFilho\`) REFERENCES \`materia\`(\`codigo\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`materia_prerequisito_materia\` DROP FOREIGN KEY \`FK_db2703c1207a629547cd32ab295\``);
        await queryRunner.query(`ALTER TABLE \`materia_prerequisito_materia\` DROP FOREIGN KEY \`FK_f7b282f12697090a17bea981a66\``);
        await queryRunner.query(`DROP INDEX \`IDX_db2703c1207a629547cd32ab29\` ON \`materia_prerequisito_materia\``);
        await queryRunner.query(`DROP INDEX \`IDX_f7b282f12697090a17bea981a6\` ON \`materia_prerequisito_materia\``);
        await queryRunner.query(`DROP TABLE \`materia_prerequisito_materia\``);
    }

}
