import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const PORT = new ConfigService().get('PORT') || 3002;

	await app.listen(PORT);
}
bootstrap();
