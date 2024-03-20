import { Module } from '@nestjs/common';
import { GroupsController } from './api/groups.controller';
import { GroupsRepository } from './infrastructure';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupEntity } from './domain/entity';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserUseCase } from './application/use-cases';

const useCases = [CreateUserUseCase];

const repositories = [GroupsRepository];

@Module({
	imports: [TypeOrmModule.forFeature([GroupEntity]), CqrsModule],
	controllers: [GroupsController],
	providers: [...repositories, ...useCases],
})
export class GroupsModule {}
