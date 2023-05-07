import { Injectable } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { InjectModel } from '@nestjs/mongoose';
import { University } from './schemas/university.schema';
import { Model } from 'mongoose';
import axios from 'axios';
import { DeleteResult } from 'mongodb';
@Injectable()
export class UniversityService {
  constructor(
    @InjectModel(University.name) private universityModel: Model<University>,
  ) {}

  async create(createUniversityDto: CreateUniversityDto): Promise<University> {
    const before = Date.now();

    const university = await new this.universityModel(
      createUniversityDto,
    ).save();

    const duration = Date.now() - before;
    console.log(`CreateOne - Query: \n Time: ${duration} ms`);

    return university;
  }

  async createAll(
    universityBody: CreateUniversityDto[],
  ): Promise<University[]> {
    const before = Date.now();

    const university = await this.universityModel.insertMany(universityBody);

    const duration = Date.now() - before;
    console.log(`createAll - Query: \n Time: ${duration} ms`);

    return university;
  }

  async findAll(): Promise<University[]> {
    const before = Date.now();

    const universities = await this.universityModel.find();

    const duration = Date.now() - before;
    console.log(`findAll - Query: \n Time: ${duration} ms`);

    return universities;
  }

  async findOneByName(name: string): Promise<University[]> {
    const before = Date.now();
    const university = await this.universityModel.find({ name });
    const duration = Date.now() - before;
    console.log(`findOneByName - Query: \n Time: ${duration} ms`);
    return university;
  }

  async findOne(id: string): Promise<University[]> {
    const before = Date.now();
    const university = await this.universityModel.find( { _id: id });
    const duration = Date.now() - before;
    console.log(`findOne - Query: \n Time: ${duration} ms`);
    return university;
  }

  async update(
    id: string,
    updateUniversityDto: UpdateUniversityDto,
  ): Promise<University> {
    const before = Date.now();
    const university = await this.universityModel.findByIdAndUpdate(
      id,
      updateUniversityDto,
    );
    const duration = Date.now() - before;
    console.log(`update - Query: \n Time: ${duration} ms`);
    return university;
  }

  async remove(id: string) {
    const before = Date.now();
    const deletedUniversity = await this.universityModel.findOneAndDelete({
      _id: id,
    });

    const duration = Date.now() - before;
    console.log(`remove - Query: \n Time: ${duration} ms`);

    return deletedUniversity;
  }

  async removeAll(): Promise<DeleteResult> {
    const before = Date.now();
    const deletedUniversities = await this.universityModel.deleteMany({});

    const duration = Date.now() - before;
    console.log(`removeAll - Query: \n Time: ${duration} ms`);

    return deletedUniversities;
  }

  async getUniversitiesBody() {
    const response = await axios.get('http://universities.hipolabs.com/search');
    const universities: CreateUniversityDto[] = [];

      response.data.forEach((university) => {
        universities.push({
          name: university.name,
          domain: university.domains[0],
          country: university.country,
          country_code: university.alpha_two_code,
          state_province: university.state_province,
          web_page: university.web_pages[0],
        });
      });
    

    return universities;
  }
}
