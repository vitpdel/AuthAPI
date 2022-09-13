import { MigrationInterface, QueryRunner, Table } from "typeorm"


export class CreateUsers1662401892227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await   queryRunner.query('CREATE EXNTENSION IF NOT EXISTS "uuid-ossp"')

        // Creating user table
        
        await queryRunner.createTable(new Table({
            name:   "users",
            columns:    [
                {
                    name:   "id",
                    type:   "uuid",
                    isPrimary:  true,
                    generationStrategy: "uuid",
                    default:    "uuid_generate_v4()",
                },
                {
                    name:   "email",
                    type: "varchar",
                },
             ],
        }))
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await   queryRunner.dropTable("users")
        await   queryRunner.query("DROP EXTENSION 'uuid-ossp'")
    }

}
