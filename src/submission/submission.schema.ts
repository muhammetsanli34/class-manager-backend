import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubmissionDocument = HydratedDocument<Submission>;

@Schema()
export class Submission {
  @Prop()
  student_id: number;

  @Prop()
  assignment_id: number;

  @Prop()
  file: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}