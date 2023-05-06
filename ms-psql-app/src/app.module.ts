import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversityModule } from './university/university.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { University } from './university/entities/university.entity';

export const typeOrmConfig: TypeOrmModuleOptions  = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: [University],
  synchronize: true,
};

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UniversityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
