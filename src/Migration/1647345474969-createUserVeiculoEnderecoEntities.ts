import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserVeiculoEnderecoEntities1647345474969 implements MigrationInterface {
    name = 'createUserVeiculoEnderecoEntities1647345474969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`endereco\` (\`id\` int NOT NULL AUTO_INCREMENT, \`rua\` varchar(255) NOT NULL, \`bairro\` varchar(255) NOT NULL, \`estado\` varchar(255) NOT NULL, \`pais\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`veiculo\` (\`placa\` varchar(7) NOT NULL, \`cor\` varchar(255) NOT NULL, \`anoFabricacao\` datetime NOT NULL, PRIMARY KEY (\`placa\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`proprietario\` (\`cpf\` varchar(255) NOT NULL, \`nome\` varchar(255) NOT NULL, \`sexo\` enum ('Masculino', 'Feminino') NOT NULL DEFAULT 'Feminino', \`dataNascimento\` datetime NOT NULL, \`Telefone\` varchar(255) NOT NULL, PRIMARY KEY (\`cpf\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`proprietario\``);
        await queryRunner.query(`DROP TABLE \`veiculo\``);
        await queryRunner.query(`DROP TABLE \`endereco\``);
    }

}
