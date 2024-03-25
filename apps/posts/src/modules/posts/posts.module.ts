import { Module } from '@nestjs/common';
import { EventPostsController } from './api';
import { KafkaModule } from 'apps/accounts/src/modules/kafka';

@Module({
	imports: [KafkaModule],
	providers: [EventPostsController],
	controllers: [],
	exports: [EventPostsController],
})
export class PostsModule {}
