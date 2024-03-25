import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserInputDTO } from '../../api/dto/input';
import { UsersRepository } from '../../infrastructure';
import { UserEntity } from '../../domain/entity';
import { ProducerService } from '../../../kafka';

export class CreateUserCommand {
	public email: string;
	public username: string;

	constructor(dto: CreateUserInputDTO) {
		this.email = dto.email;
		this.username = dto.username;
	}
}

@CommandHandler(CreateUserCommand)
export class CreateUserUseCase implements ICommandHandler<CreateUserCommand> {
	constructor(
		private readonly usersRepository: UsersRepository,
		private readonly producerService: ProducerService,
	) {}

	async execute(command: CreateUserCommand): Promise<void> {
		const user = UserEntity.create(command);

		await this.usersRepository.save(user);

		await this.producerService.produce('create-user', {
			value: user.id,
		});

		console.log(user);
	}
}
