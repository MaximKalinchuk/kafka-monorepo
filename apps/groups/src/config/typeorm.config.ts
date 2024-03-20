import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { GroupEntity } from '../modules/groups/domain/entity';

export const TypeOrmConfigService = (): TypeOrmModuleAsyncOptions => ({
	useFactory: (configService: ConfigService) => ({
		type: 'postgres',
		host: configService.get('PG_HOST'),
		port: +configService.get('PG_PORT'),
		username: configService.get('PG_USERNAME'),
		password: configService.get('PG_PASSWORD'),
		database: configService.get('PG_DATABASE'),
		entities: [GroupEntity],
		synchronize: true,
	}),
	inject: [ConfigService],
	imports: [ConfigModule],
});
