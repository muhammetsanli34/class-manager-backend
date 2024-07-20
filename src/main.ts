import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  console.log('Starting the application...', process.env.JWT_SECRET);
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Class Management System')
    .setDescription('The Class Management System API description')
    .setVersion('1.0')
    .addTag('class-manager')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
