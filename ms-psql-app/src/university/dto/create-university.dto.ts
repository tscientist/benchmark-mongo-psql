import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUniversityDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    domain: string;
    
    @ApiProperty()
    @IsString()
    country: string;

    @ApiProperty()
    @IsString()
    country_code: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    state_province: string;

    @ApiProperty()
    @IsString()
    web_page: string;
}
