import { randomUUID } from 'crypto';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Seed1639029201277 implements MigrationInterface {
	name = 'Seed1639029201277';

	public async up(queryRunner: QueryRunner): Promise<void> {
		const supportId = randomUUID();
		const adminId = randomUUID();
		const ritaId = randomUUID();

		await queryRunner.query(
			`INSERT INTO managers (id, email, "passwordHash", role, "refreshToken", active)
		  VALUES
		  ('${supportId}', 'martyanov@teh.expert', '$2b$10$R6/ixJoKJF0xZC2PaEztB.ISugXCDASwLOmgCFHAT8dzMiVem/kwu', 'Поддержка', '', 'true'),
		  ('${ritaId}', 'm-sh@bravosoft.nnov.ru', '$2b$10$PJodqwB7kgYNI9PoK8nmHOdXQzS41F.KjLEe0S0iocEn/1vG.wctG', 'Супер Админ', '', 'true'),
		  ('${adminId}', 'admin@bravosoft.nnov.ru', '$2b$10$jm0.DyiwLjSXzRfGnrnzbeU.dFbQaCkLEPqqT4cV7qyVBrSlNItI6', 'Супер Админ', '', 'true')`,
		);

		await queryRunner.query(
			`INSERT INTO manager_profiles ("managerId", "firstName", "lastName", "patronymicName", "position", "division", "phone")
		  VALUES
		  ('${supportId}', 'Олег', 'Мартьянов', 'Михайлович', '', '', ''),
		  ('${ritaId}', 'Маргарита', 'Шмакова', 'Алексеевна', '', '', ''),
		  ('${adminId}', 'Админ', 'Админов', 'Администратович', '', '', '')`,
		);
		// const userId = await queryRunner.query(`SELECT id FROM users WHERE username = 'Максим'`);
		// for (let i = 1; i < 25; i += 1) {
		// 	await queryRunner.query(`INSERT INTO posts (img, title, description, "usersId")
		// 			VALUES ('http://img${i}', ${i}, 'descroption-${i}', '${userId[0].id}')`);
		// }
		// for (let i = 0; i < 50; i += 1) {
		// 	await queryRunner.query(
		// 		`WITH user_data AS (
		// 			INSERT INTO users (email, "passwordHash", username, role, refresh_token) n
		// 			VALUES ($1, $2, $3, $4, NULL)
		// 			RETURNING *
		// 		),
		// 			em_conf AS (
		// 			INSERT INTO "emailConfirmation" ("userId", "confirmationCode", "isConfirmed")
		// 			VALUES ((SELECT id from user_data), '', true)
		// 			RETURNING *
		// 		),
		// 			ps_rec AS (
		// 			INSERT INTO "passwordRecovery" ("userId", "confirmationCode", "newPassword")
		// 			VALUES ((SELECT id from user_data), NULL, NULL)
		// 			RETURNING *
		// 		)
		// 		SELECT * FROM users`,
		// 		['anton@mail.ru', '$2a$10$rR5v7AAGttdivdvEdFKHOOtDG3261zu5slvQc33ylHtvxOoaPS1GG', 'Антон', 'USER'],
		// 	);
		// }
	}

	public async down(): Promise<void> {}
}
