// model Class {
//     id         Int      @id @default(autoincrement())
//     name       String
//     teacher_id Int
//     created_at DateTime @default(now())
//     updated_at DateTime @default(now())

//     teacher         User           @relation("TeacherClasses", fields: [teacher_id], references: [id])
//     assignments     Assignment[]
//     notices         Notice[]
//     student_classes StudentClass[]
//     marks           Mark[]
//   }

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
