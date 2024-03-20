import { Module } from '@nestjs/common';
import { UsersController } from './users/api/users.controller';

@Module({
	imports: [],
	controllers: [UsersController],
	providers: [],
})
export class AppModule {}
