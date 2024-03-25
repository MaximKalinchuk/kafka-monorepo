import { Controller, Injectable, OnModuleInit } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ConsumerService } from 'apps/accounts/src/modules/kafka';

@Injectable()
export class EventGroupsController implements OnModuleInit {
	constructor(
		private readonly consumerService: ConsumerService,
		private readonly commandBus: CommandBus,
	) {}

	async onModuleInit() {
		// await this.consumerService.consume(
		// 	{ topic: 'create-user' },
		// 	{
		// 		eachMessage: async ({ topic, partition, message }) => {
		// 			console.log({
		// 				value: message.value.toString(),
		// 				topic: topic.toString(),
		// 				partition: partition.toString(),
		// 			});
		// 		},
		// 	},
		// );
	}
}
