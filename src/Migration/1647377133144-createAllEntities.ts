import {MigrationInterface, QueryRunner} from "typeorm";

export class createAllEntities1647377133144 implements MigrationInterface {
    name = 'createAllEntities1647377133144'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`rate\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NULL, \`nota\` int NOT NULL, \`professorMatricula\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`professor\` (\`matricula\` varchar(255) NOT NULL, \`nome\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`cargo\` varchar(255) NOT NULL, PRIMARY KEY (\`matricula\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`materia\` (\`codigo\` int NOT NULL AUTO_INCREMENT, \`carga\` int NOT NULL, PRIMARY KEY (\`codigo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`curso\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`aluno\` (\`matricula\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`isBolsista\` tinyint NOT NULL, \`nome\` varchar(255) NOT NULL, \`situacao\` enum ('Reguar', 'Em risco', 'Jubilado') NOT NULL DEFAULT 'Reguar', \`rendimento\` float NOT NULL, \`cursoId\` int NULL, UNIQUE INDEX \`REL_78a69c2e65e9c3fd20f1a9ce72\` (\`cursoId\`), PRIMARY KEY (\`matricula\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`materia_professores_professor\` (\`materiaCodigo\` int NOT NULL, \`professorMatricula\` varchar(255) NOT NULL, INDEX \`IDX_20b47f4be43a175135960786f3\` (\`materiaCodigo\`), INDEX \`IDX_b6a9a181ba88f8a0d0f0f42d3c\` (\`professorMatricula\`), PRIMARY KEY (\`materiaCodigo\`, \`professorMatricula\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`aluno_materias_materia\` (\`alunoMatricula\` varchar(255) NOT NULL, \`materiaCodigo\` int NOT NULL, INDEX \`IDX_47512055a6dea7ef488cc954fa\` (\`alunoMatricula\`), INDEX \`IDX_ca479dd0d60f88db0869e3ba96\` (\`materiaCodigo\`), PRIMARY KEY (\`alunoMatricula\`, \`materiaCodigo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`rate\` ADD CONSTRAINT \`FK_aa0d4248ff49587dd0088166f82\` FOREIGN KEY (\`professorMatricula\`) REFERENCES \`professor\`(\`matricula\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`aluno\` ADD CONSTRAINT \`FK_78a69c2e65e9c3fd20f1a9ce727\` FOREIGN KEY (\`cursoId\`) REFERENCES \`curso\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`materia_professores_professor\` ADD CONSTRAINT \`FK_20b47f4be43a175135960786f32\` FOREIGN KEY (\`materiaCodigo\`) REFERENCES \`materia\`(\`codigo\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`materia_professores_professor\` ADD CONSTRAINT \`FK_b6a9a181ba88f8a0d0f0f42d3cb\` FOREIGN KEY (\`professorMatricula\`) REFERENCES \`professor\`(\`matricula\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`aluno_materias_materia\` ADD CONSTRAINT \`FK_47512055a6dea7ef488cc954fa6\` FOREIGN KEY (\`alunoMatricula\`) REFERENCES \`aluno\`(\`matricula\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`aluno_materias_materia\` ADD CONSTRAINT \`FK_ca479dd0d60f88db0869e3ba964\` FOREIGN KEY (\`materiaCodigo\`) REFERENCES \`materia\`(\`codigo\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`aluno_materias_materia\` DROP FOREIGN KEY \`FK_ca479dd0d60f88db0869e3ba964\``);
        await queryRunner.query(`ALTER TABLE \`aluno_materias_materia\` DROP FOREIGN KEY \`FK_47512055a6dea7ef488cc954fa6\``);
        await queryRunner.query(`ALTER TABLE \`materia_professores_professor\` DROP FOREIGN KEY \`FK_b6a9a181ba88f8a0d0f0f42d3cb\``);
        await queryRunner.query(`ALTER TABLE \`materia_professores_professor\` DROP FOREIGN KEY \`FK_20b47f4be43a175135960786f32\``);
        await queryRunner.query(`ALTER TABLE \`aluno\` DROP FOREIGN KEY \`FK_78a69c2e65e9c3fd20f1a9ce727\``);
        await queryRunner.query(`ALTER TABLE \`rate\` DROP FOREIGN KEY \`FK_aa0d4248ff49587dd0088166f82\``);
        await queryRunner.query(`DROP INDEX \`IDX_ca479dd0d60f88db0869e3ba96\` ON \`aluno_materias_materia\``);
        await queryRunner.query(`DROP INDEX \`IDX_47512055a6dea7ef488cc954fa\` ON \`aluno_materias_materia\``);
        await queryRunner.query(`DROP TABLE \`aluno_materias_materia\``);
        await queryRunner.query(`DROP INDEX \`IDX_b6a9a181ba88f8a0d0f0f42d3c\` ON \`materia_professores_professor\``);
        await queryRunner.query(`DROP INDEX \`IDX_20b47f4be43a175135960786f3\` ON \`materia_professores_professor\``);
        await queryRunner.query(`DROP TABLE \`materia_professores_professor\``);
        await queryRunner.query(`DROP INDEX \`REL_78a69c2e65e9c3fd20f1a9ce72\` ON \`aluno\``);
        await queryRunner.query(`DROP TABLE \`aluno\``);
        await queryRunner.query(`DROP TABLE \`curso\``);
        await queryRunner.query(`DROP TABLE \`materia\``);
        await queryRunner.query(`DROP TABLE \`professor\``);
        await queryRunner.query(`DROP TABLE \`rate\``);
    }

}
