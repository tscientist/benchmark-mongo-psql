import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
