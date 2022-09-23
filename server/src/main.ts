import { NestFactory } from '@nestjs/core';
import { ExpressLoader } from '@nestjs/serve-static';
import { graphqlUploadExpress } from 'graphql-upload';
import path, { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: '*'});
  app.use(graphqlUploadExpress());
  await app.listen(3001);
}
bootstrap();
