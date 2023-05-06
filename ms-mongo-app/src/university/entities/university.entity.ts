import {
  Entity,
  ObjectId,
  ObjectIdColumn,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('university')
export class University {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: ObjectId;
  @Column({ length: 255 }) name: string;
  @Column({ length: 255 }) domain: string;
  @Column({ length: 255 }) country: string;
  @Column({ length: 20 }) countryCode: string;
  @Column({ length: 255 }) stateProvince?: string;
  @Column({ length: 255 }) webPage: string;

  constructor(university?: Partial<University>) {
    Object.assign(this, university);
  }
}
