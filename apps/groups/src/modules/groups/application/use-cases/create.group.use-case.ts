import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateGroupInputDTO } from '../../api/dto/input';
import { GroupsRepository } from '../../infrastructure';
import { GroupEntity } from '../../domain/entity';

export class CreateGroupCommand {
	public groupName: string;

	constructor(dto: CreateGroupInputDTO) {
		this.groupName = dto.groupName;
	}
}

@CommandHandler(CreateGroupCommand)
export class CreateUserUseCase implements ICommandHandler<CreateGroupCommand> {
	constructor(private readonly groupsRepository: GroupsRepository) {}

	async execute(command: CreateGroupCommand): Promise<void> {
		const newGroup = GroupEntity.create(command);

		await this.groupsRepository.save(newGroup);

		console.log(newGroup);
	}
}
