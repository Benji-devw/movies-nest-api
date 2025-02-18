import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [MoviesModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
