import { Injectable } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { InjectModel } from '@nestjs/mongoose';
import { University } from './schemas/university.schema';
import { Model } from 'mongoose';
import axios from 'axios';
@Injectable()
export class UniversityService {
  constructor(@InjectModel(University.name) private universityModel: Model<University>) {}

  async create(createUniversityDto: CreateUniversityDto): Promise<University> {
    const before = Date.now();

    const university = await new this.universityModel(createUniversityDto).save();

    const duration = Date.now() - before;
    console.log(`CreateOne - Query: \n Time: ${duration} ms`)

    return university;
  }

  async findAll(): Promise<University[]> {
    return this.universityModel.find().exec();
  }

  async findOne(id: string) {
    return await this.universityModel.findById(id);
  }

  async update(id: string, updateUniversityDto: UpdateUniversityDto) {
    return await this.universityModel.findByIdAndUpdate(id, updateUniversityDto);
  }

  async remove(id: string) {
    const deletedUniversity = await this.universityModel.findOneAndDelete({ _id: id });

    return deletedUniversity;
  }

  async getUniversitiesBody(){
    let response = await axios.get('http://universities.hipolabs.com/search');
    let universities: CreateUniversityDto[] = [];

    response.data.forEach(university => {
      universities.push({
        "name": university.name,
        "domain": university.domains[0],
        "country": university.country,
        "country_code": university.alpha_two_code,
        "state_province": university.state_province,
        "web_page": university.web_pages[0],
      });
    });

    return universities;
  }
}
