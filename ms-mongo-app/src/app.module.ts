import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversityModule } from './university/university.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mongo'),
    UniversityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
