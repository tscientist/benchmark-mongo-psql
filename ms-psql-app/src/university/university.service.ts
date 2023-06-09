import { Injectable } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { InjectDataSource, InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { University } from './entities/university.entity';
import { Repository, EntityManager, DataSource } from 'typeorm';
import axios from 'axios';


@Injectable()
export class UniversityService {
  constructor(
    @InjectDataSource() private dataSource: DataSource
  ) { }

  async create(universityBody: CreateUniversityDto) {
    const before = Date.now();

    const university = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(University)
      .values({
        ...universityBody 
      })
      .execute();
    
    const duration = Date.now() - before;

    const universitiesQuery = this.dataSource
      .createQueryBuilder()
      .insert()
      .into(University)
      .values({
        ...universityBody 
      })
      .getSql();

      console.log(`CreateOne - Query: ${universitiesQuery}\n Time: ${duration} ms`)
      return university;
  }

  async createAll(universityBody: CreateUniversityDto[]) {
    const before = Date.now();

    const university = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(University)
      .values(universityBody)
      .execute();
    
    const duration = Date.now() - before;

    const universitiesQuery = this.dataSource
      .createQueryBuilder()
      .insert()
      .into(University)
      .values(universityBody)
      .getSql();

    console.log(`CreateAll - Query: ${universitiesQuery}\n Time: ${duration} ms`)
    return university;
  }

  async findAll() {
    const before = Date.now();

    const universities = await this.dataSource
      .createQueryBuilder()
      .select('university')
      .from(University, 'university')
      .getMany();

    const duration = Date.now() - before;

    const universitiesQuery = this.dataSource
      .createQueryBuilder()
      .select('university')
      .from(University, 'university')
      .getSql();

      console.log(`Query: ${universitiesQuery}\n Time: ${duration} ms`)
      return universities;
  }

  async findOneByName(name: string) {
    const before = Date.now();

    const universities = await this.dataSource
      .createQueryBuilder()
      .select('university')
      .from(University, 'university')
      .where("university.name= :universitiesName", { universitiesName: name })
      .getMany();

    const duration = Date.now() - before;

    const universitiesQuery = this.dataSource
      .createQueryBuilder()
      .select('university')
      .from(University, 'university')
      .where("university.name= :universitiesName", { universitiesName: name })
      .getSql();

    console.log(`FindOneByName - Query: ${universitiesQuery}\n Time: ${duration} ms`)

    return universities;
  }

  async findOne(id: number) {
    const before = Date.now();

    const universities = this.dataSource
      .createQueryBuilder()
      .select('university')
      .from(University, 'university')
      .where("university.id= :universitiesId", { universitiesId: id })
      .getMany();

    const duration = Date.now() - before;

    const universitiesQuery = this.dataSource
      .createQueryBuilder()
      .select('university')
      .from(University, 'university')
      .where("university.id= :universitiesId", { universitiesId: id })
      .getSql();
      
    console.log(`FindOne - Query: ${universitiesQuery}\n Time: ${duration} ms`)

    return universities;
  }

  update(id: number, updateUniversityDto: UpdateUniversityDto) {
    return `This action updates a #${id} university`;
  }

  async remove(id: number) {
    const before = Date.now();

    const universities = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(University, 'university')
      .where("university.id= :universitiesId", { universitiesId: id })
      .execute();

    const duration = Date.now() - before;

    const universitiesQuery = this.dataSource
      .createQueryBuilder()
      .delete()
      .from(University, 'university')
      .where("university.id= :universitiesId", { universitiesId: id })
      .getSql();
      
    console.log(`Delete - Query: ${universitiesQuery}\n Time: ${duration} ms`)

    return universities;
  }

  async removeAll() {
    const before = Date.now();

    const universities = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(University, 'university')
      .execute();

    const duration = Date.now() - before;

    const universitiesQuery = this.dataSource
      .createQueryBuilder()
      .delete()
      .from(University, 'university')
      .getSql();
      
    console.log(`DeleteAll - Query: ${universitiesQuery}\n Time: ${duration} ms`)

    return universities;
  }

  async getUniversitiesBody(){
    try {
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
    }catch(error) {
      console.log(error)
    }
  }
}
