import { Injectable } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { University } from './entities/university.entity';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(University)
    private readonly universitiesRepository: MongoRepository<University>,
  ) {}

  create(createUniversityDto: CreateUniversityDto) {
    return 'This action adds a new university';
  }

  findAll() {
    return `This action returns all university`;
  }

  findOne(id: number) {
    return `This action returns a #${id} university`;
  }

  update(id: number, updateUniversityDto: UpdateUniversityDto) {
    return `This action updates a #${id} university`;
  }

  remove(id: number) {
    return `This action removes a #${id} university`;
  }
}
