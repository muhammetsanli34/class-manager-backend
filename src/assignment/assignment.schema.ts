import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NoticeDocument = HydratedDocument<Notice>;

@Schema()
export class Notice {
  @Prop()
  content: string;

  @Prop()
  class_id: number;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}