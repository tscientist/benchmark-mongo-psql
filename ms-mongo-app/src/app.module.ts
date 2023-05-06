import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversityModule } from './university/university.module';
import { UniversityController } from './university/university.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGOURI,
      database: process.env.MONGONAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UniversityModule,
  ],
  controllers: [AppController, UniversityController],
  providers: [AppService],
})
export class AppModule {}
