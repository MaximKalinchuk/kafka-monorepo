import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const PORT = new ConfigService().get('PORT') || 3003;
	await app.listen(PORT);
}
bootstrap();
