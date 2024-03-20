import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGroupInputDTO } from './dto/input';
import { CommandBus } from '@nestjs/cqrs';
import { CreateGroupCommand } from '../application/use-cases';

@Controller('groups')
export class GroupsController {
	constructor(private readonly commandBus: CommandBus) {}
	@Get()
	async getGroups() {
		return [{ groupName: 'Группа' }];
	}

	@Post()
	async createGroup(@Body() dto: CreateGroupInputDTO) {
		return await this.commandBus.execute(new CreateGroupCommand(dto));
	}
}
