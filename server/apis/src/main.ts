import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api/v1');
	app.enableCors({
		origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
		credentials: true,
	});

	const config = new DocumentBuilder()
		.setTitle('DEMO simple')
		.setDescription('The DEMO APIs description')
		.setVersion('1.0')
		.addTag('user')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('', app, document);
	await app.listen(3000);
}
bootstrap();
