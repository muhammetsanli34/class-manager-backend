// model Submission {
//     id            Int        @id @default(autoincrement())
//     student       User       @relation(fields: [student_id], references: [id])
//     student_id    Int        @unique
//     assignment    Assignment @relation(fields: [assignment_id], references: [id])
//     assignment_id Int        @unique
//     file          String
//     created_at    DateTime   @default(now())
//     updated_at    DateTime   @default(now())
//   }

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