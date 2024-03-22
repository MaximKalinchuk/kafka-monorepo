import { Module } from '@nestjs/common';
import { GroupsController } from './api/groups.controller';
import { GroupsQueryRepository, GroupsRepository } from './infrastructure';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupEntity } from './domain/entity';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserUseCase } from './application/use-cases';
import { EventGroupsController } from './api/event.groups.controller';
import { KafkaModule } from 'apps/accounts/src/modules/kafka';
import { UpdateGroupUsersUseCase } from './application/use-cases/events';

const useCases = [CreateUserUseCase, UpdateGroupUsersUseCase];

const repositories = [GroupsRepository, GroupsQueryRepository];

@Module({
	imports: [TypeOrmModule.forFeature([GroupEntity]), CqrsModule, KafkaModule],
	controllers: [GroupsController],
	providers: [...repositories, ...useCases, EventGroupsController],
})
export class GroupsModule {}
