// model Notice {
//     id         Int      @id @default(autoincrement())
//     content    String
//     class      Class    @relation(fields: [class_id], references: [id])
//     class_id   Int
//     created_at DateTime @default(now())
//     updated_at DateTime @default(now())
//   }

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
