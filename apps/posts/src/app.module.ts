import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm.config';
import { PostsModule } from './modules/posts/posts.module';

@Module({
	imports: [
		TypeOrmModule.forRootAsync(TypeOrmConfigService()),
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `./apps/posts/.${process.env.NODE_ENV}.env`,
		}),
		PostsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
