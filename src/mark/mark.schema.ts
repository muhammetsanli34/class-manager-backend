// model Mark {
//     id            Int        @id @default(autoincrement())
//     student       User       @relation(fields: [student_id], references: [id])
//     student_id    Int
//     assignment    Assignment @relation(fields: [assignment_id], references: [id])
//     assignment_id Int
//     mark          Int
//     class         Class      @relation(fields: [class_id], references: [id])
//     class_id      Int
//     created_at    DateTime   @default(now())
//     updated_at    DateTime   @default(now())
//   }
  

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