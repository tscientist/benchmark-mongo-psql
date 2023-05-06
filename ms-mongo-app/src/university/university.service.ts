import { Injectable } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { InjectModel } from '@nestjs/mongoose';
import { University } from './schemas/university.schema';
import { Model } from 'mongoose';

@Injectable()
export class UniversityService {
  constructor(@InjectModel(University.name) private universityModel: Model<University>) {}

  async create(createUniversityDto: CreateUniversityDto): Promise<University> {
    const createdCat = new this.universityModel(createUniversityDto);
    return createdCat.save();
  }

  async findAll(): Promise<University[]> {
    return this.universityModel.find().exec();
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
