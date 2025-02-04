import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1682454195501 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Step 1: Create the enum type if it doesn't exist
    await queryRunner.query(`
      CREATE TYPE public.users_roles_enum AS ENUM ('user', 'admin');
    `);

    // Step 2: Create the users table
    await queryRunner.query(`
      CREATE TABLE "users" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        "email" character varying NOT NULL,
        "password" character varying NOT NULL,
        "roles" "public"."users_roles_enum" array NOT NULL DEFAULT '{user}',
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
        CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the users table
    await queryRunner.query(`DROP TABLE IF EXISTS "users"`);

    // Drop the enum type
    await queryRunner.query(`DROP TYPE IF EXISTS public.users_roles_enum`);
  }
}
