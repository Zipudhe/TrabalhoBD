import {MigrationInterface, QueryRunner} from "typeorm";

export class seedCursos1650674538260 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO curso(nome) VALUES('Ciencia da computacao')`)
        await queryRunner.query(`INSERT INTO curso(nome) VALUES('Engenharia da computacao')`)
        await queryRunner.query(`INSERT INTO curso(nome) VALUES('licenciatura da computacao')`)
        await queryRunner.query(`INSERT INTO curso(nome) VALUES('Fisica')`)
        await queryRunner.query(`INSERT INTO curso(nome) VALUES('Arquitetura')`)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`IF EXISTS DROP TABLE curso`)
    }

}