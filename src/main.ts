import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Set the view engine to Pug
  app.setViewEngine('pug');

  // Optionally set the views directory
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  app.useStaticAssets(join(__dirname, '..', 'views', 'js'), {
    prefix: '/js', // This will make the assets available at "/js" in the URLs
  });

  // const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
