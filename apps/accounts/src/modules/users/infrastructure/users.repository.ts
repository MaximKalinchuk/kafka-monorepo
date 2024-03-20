import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../domain/entity';

export class UsersRepository {
	constructor(@InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity>) {}

	async save(userEntity: UserEntity) {
		await this.usersRepository.save(userEntity);
	}
}
