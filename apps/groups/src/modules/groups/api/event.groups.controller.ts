import { Controller, Injectable, OnModuleInit } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ConsumerService } from 'apps/accounts/src/modules/kafka';
import { UpdateGroupUsersCommand } from '../application/use-cases/events';

@Injectable()
export class EventGroupsController implements OnModuleInit {
	constructor(
		private readonly consumerService: ConsumerService,
		private readonly commandBus: CommandBus,
	) {}

	async onModuleInit() {
		await this.consumerService.consume({
			topics: { topics: ['create-user'] },
			config: { groupId: 'group-consumer' },
			onMessage: async (message) => {
				console.log({
					value: message.value.toString(),
				});
				await this.commandBus.execute(new UpdateGroupUsersCommand(message.value.toString()));
			},
		});
	}
}
