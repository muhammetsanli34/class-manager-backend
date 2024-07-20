import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClassDocument = HydratedDocument<Class>;

@Schema()
export class Class {
  @Prop()
  name: string;

  @Prop()
  teacher_id: number;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}
