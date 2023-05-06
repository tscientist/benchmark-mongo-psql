import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UniversityService } from './university.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Post()
  create(@Body() createUniversityDto: CreateUniversityDto) {
    return this.universityService.create(createUniversityDto);
  }

  @Post('/createAll')
  createMany(@Body() createUniversityDto: CreateUniversityDto) {
    return this.universityService.createAll(createUniversityDto);
  }

  @Get()
  findAll() {
    return this.universityService.findAll();
  }

  @Get('/name/:name')
  findOne(@Param('name') name: string) {
    return this.universityService.findOneByName(name);
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.universityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUniversityDto: UpdateUniversityDto) {
    return this.universityService.update(+id, updateUniversityDto);
  }

  @Delete('/removeAll')
  removeAll() {
    return this.universityService.removeAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.universityService.remove(+id);
  }

}
