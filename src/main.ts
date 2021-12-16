import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './core/pipes/validation.pipe';
import * as helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(new ValidationPipe());

  app.use(helmet());

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('UPA Helper')
    .setDescription(
      'API de uma plataforma de gestão em saúde com foco em pequenos hospitais.',
    )
    .setVersion('1.0.1')
    .addTag('UPA Helper')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/swagger', app, document);

  await app.listen(3000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
