import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './domain/entity';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersRepository } from './infrastructure';
import { CreateUserUseCase } from './application/use-cases';
import { UsersController } from './api';

const useCases = [CreateUserUseCase];

const repositories = [UsersRepository];

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([UserEntity])],
	controllers: [UsersController],
	providers: [...repositories, ...useCases],
	exports: [],
})
export class UsersModule {}
