import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserInputDTO } from './dto/input';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../application/use-cases';

@Controller('users')
export class UsersController {
	constructor(private readonly commandBus: CommandBus) {}

	@Get()
	async getUsers() {
		return [{ username: 'Alex' }];
	}

	@Post()
	async createUser(@Body() dto: CreateUserInputDTO) {
		await this.commandBus.execute(new CreateUserCommand(dto));
	}
}
