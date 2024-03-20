import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/users.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(3000);
}
bootstrap();
