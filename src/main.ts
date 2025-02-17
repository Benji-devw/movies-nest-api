import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { MoviesModule } from './movies/movies.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3000);

  const movies = await NestFactory.create(MoviesModule);
  await movies.listen(process.env.PORT ?? 3000);
}
bootstrap();
