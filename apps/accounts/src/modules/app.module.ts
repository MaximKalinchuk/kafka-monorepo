import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from '../config/typeorm.config';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		UsersModule,
		TypeOrmModule.forRootAsync(TypeOrmConfigService()),
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `./apps/accounts/.${process.env.NODE_ENV}.env`,
		}),
	],
	controllers: [],
	providers: [],
	exports: [],
})
export class AppModule {}
