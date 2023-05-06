import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  mongoose.set('debug', true);
  const config = new DocumentBuilder()
    .setTitle('MongoDB APP')
    .setDescription('NestJS app with mongo connection')
    .setVersion('1.0')
    .addTag('unviersities')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(3001);
}
bootstrap();
