import { Injectable } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { InjectDataSource, InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { University } from './entities/university.entity';
import { Repository, EntityManager, DataSource } from 'typeorm';


@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(University) private universityRepository: Repository<University>,
    @InjectEntityManager() private postManager: EntityManager,
    @InjectDataSource() private dataSource: DataSource
  ) { }

  create(createUniversityDto: CreateUniversityDto) {
    return 'This action adds a new university';
  }

  async findAll() {
    const universities = await this.universityRepository.find({});

    return universities;
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
