import { Module } from '@nestjs/common';
import { GroupsController } from './groups/api/groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsModule } from './groups/groups.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from '../config/typeorm.config';

@Module({
	imports: [
		TypeOrmModule.forRootAsync(TypeOrmConfigService()),
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `./apps/groups/.${process.env.NODE_ENV}.env`,
		}),
		GroupsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
