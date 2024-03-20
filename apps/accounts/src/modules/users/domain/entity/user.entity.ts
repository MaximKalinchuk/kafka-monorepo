import { Entity, Column, PrimaryColumn } from 'typeorm';
import { CreateUserInputDTO } from '../../api/dto/input';
import { randomUUID } from 'crypto';

@Entity('users')
export class UserEntity {
	@PrimaryColumn('uuid')
	public id: string;

	@Column()
	public email: string;

	@Column()
	public username: string;

	static create(dto: CreateUserInputDTO): UserEntity {
		const user = new UserEntity();
		user.id = randomUUID();
		user.email = dto.email;
		user.username = dto.username;
		return user;
	}
}
