// model User {
//     id                Int            @id @default(autoincrement())
//     username          String
//     password_hash     String
//     first_name        String
//     last_name         String
//     email             String         @unique
//     profile_picture   String?
//     role              Role
//     messages_sent     Message[]
//     messages_received Message[]      @relation("UserToMessages")
//     submissions       Submission[]
//     marks             Mark[]
//     classesTaught     Class[]        @relation("TeacherClasses")
//     student_classes   StudentClass[]
//     created_at        DateTime       @default(now())
//     updated_at        DateTime       @default(now())
//   }

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password_hash: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  email: string;

  @Prop()
  profile_picture?: string;

  @Prop()
  role: string;

  @Prop()
  messages_sent: string[];

  @Prop()
  messages_received: string[];

  @Prop()
  submissions: string[];

  @Prop()
  marks: string[];

  @Prop()
  classesTaught: string[];

  @Prop()
  student_classes: string[];

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}