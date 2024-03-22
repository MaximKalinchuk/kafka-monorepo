import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GroupsQueryRepository, GroupsRepository } from '../../../infrastructure';
import { NotFoundException } from '@nestjs/common';

export class UpdateGroupUsersCommand {
	constructor(public id: string) {}
}

@CommandHandler(UpdateGroupUsersCommand)
export class UpdateGroupUsersUseCase implements ICommandHandler<UpdateGroupUsersCommand> {
	constructor(
		private readonly groupsQueryRepository: GroupsQueryRepository,
		private readonly groupsRepository: GroupsRepository,
	) {}

	async execute(command: UpdateGroupUsersCommand): Promise<void> {
		const mainGroup = await this.groupsQueryRepository.getMainGroup();
		console.log(mainGroup);
		if (!mainGroup) {
			throw new NotFoundException(`Главная группа не найдена`);
		}

		mainGroup.users.push(command.id);

		await this.groupsRepository.save(mainGroup);
	}
}
