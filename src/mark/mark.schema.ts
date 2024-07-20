import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MarkDocument = HydratedDocument<Mark>;

@Schema()
export class Mark {
  @Prop()
  student_id: number;

  @Prop()
  assignment_id: number;

  @Prop()
  mark: number;

  @Prop()
  class_id: number;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}