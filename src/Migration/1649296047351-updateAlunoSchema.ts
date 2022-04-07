import {MigrationInterface, QueryRunner} from "typeorm";

export class updateAlunoSchema1649296047351 implements MigrationInterface {
    name = 'updateAlunoSchema1649296047351'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`aluno\` CHANGE \`isBolsista\` \`isBolsista\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`aluno\` CHANGE \`rendimento\` \`rendimento\` float NOT NULL DEFAULT '3'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`aluno\` CHANGE \`rendimento\` \`rendimento\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`aluno\` CHANGE \`isBolsista\` \`isBolsista\` tinyint NOT NULL`);
    }

}
