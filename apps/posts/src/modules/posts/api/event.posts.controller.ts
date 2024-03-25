import { Injectable, OnModuleInit } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ConsumerService } from 'apps/accounts/src/modules/kafka';

@Injectable()
export class EventPostsController implements OnModuleInit {
	constructor(private readonly consumerService: ConsumerService) {}

	async onModuleInit() {
		await this.consumerService.consume({
			topic: { topic: 'create-user' },
			config: { groupId: 'group-consumer' },
			onMessage: async (message) => {
				console.log({
					value: message.value.toString(),
				});
				throw new Error('Test error!');

				// await this.commandBus.execute(new UpdateGroupUsersCommand(message.value.toString()));
			},
		});
	}
}
