import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateGroupInputDTO } from '../../api/dto/input';
import { GroupsRepository } from '../../infrastructure';
import { GroupEntity } from '../../domain/entity';
import { ProducerService } from 'apps/accounts/src/modules/kafka';

export class CreateGroupCommand {
	public groupName: string;

	constructor(dto: CreateGroupInputDTO) {
		this.groupName = dto.groupName;
	}
}

@CommandHandler(CreateGroupCommand)
export class CreateUserUseCase implements ICommandHandler<CreateGroupCommand> {
	constructor(
		private readonly groupsRepository: GroupsRepository,
		private readonly producerService: ProducerService,
	) {}

	async execute(command: CreateGroupCommand): Promise<void> {
		const newGroup = GroupEntity.create(command);

		await this.groupsRepository.save(newGroup);

		await this.producerService.produce('create-group', {
			value: newGroup.id,
		});

		console.log(newGroup);
	}
}
