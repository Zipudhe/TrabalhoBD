import {MigrationInterface, QueryRunner} from "typeorm";

export class fixAlunoEnumType1649299465839 implements MigrationInterface {
    name = 'fixAlunoEnumType1649299465839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`aluno\` CHANGE \`situacao\` \`situacao\` enum ('Regular', 'Em risco', 'Jubilado') NOT NULL DEFAULT 'Regular'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`aluno\` CHANGE \`situacao\` \`situacao\` enum ('Reguar', 'Em risco', 'Jubilado') NOT NULL DEFAULT 'Reguar'`);
    }

}
