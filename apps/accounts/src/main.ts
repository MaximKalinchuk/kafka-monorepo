import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ConfigService } from '@nestjs/config';
import { configApp } from './config/configApp';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const PORT = new ConfigService().get('PORT') || 3001;

	configApp(app);
	await app.listen(PORT);
}
bootstrap();
