import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { CreateGroupInputDTO } from './dto/input';
import { CommandBus } from '@nestjs/cqrs';
import { CreateGroupCommand } from '../application/use-cases';
import { GroupsQueryRepository } from '../infrastructure/groups.query.repository';

@Controller('groups')
export class GroupsController {
	constructor(
		private readonly commandBus: CommandBus,
		private readonly groupsQueryRepository: GroupsQueryRepository,
	) {}
	@Get()
	async getGroups() {
		return [{ groupName: 'Группа' }];
	}

	@Get(':id')
	async getGroupById(@Param('id', ParseUUIDPipe) id: string) {
		return await this.groupsQueryRepository.getGroupById(id);
	}

	@Post()
	async createGroup(@Body() dto: CreateGroupInputDTO) {
		return await this.commandBus.execute(new CreateGroupCommand(dto));
	}
}
