import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateJobTable1621234567890 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "job" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "lastRunTimestamp" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "nextRunTimestamp" TIMESTAMP,
                CONSTRAINT "PK_job" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "job"`);
    }

}
