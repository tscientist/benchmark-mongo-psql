import { Module } from '@nestjs/common';
import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { University, UniversitySchema } from './schemas/university.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: University.name, schema: UniversitySchema }])],
  controllers: [UniversityController],
  providers: [UniversityService],
})
export class UniversityModule {}
