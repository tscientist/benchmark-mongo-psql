
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UniversityDocument = HydratedDocument<University>;

@Schema({ collection: 'university' })
export class University {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  domain: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  country_code: string;

  @Prop()
  state_province: string;

  @Prop({ required: true })
  web_page: string;
}

export const UniversitySchema = SchemaFactory.createForClass(University);
