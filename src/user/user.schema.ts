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

export const UserSchema = SchemaFactory.createForClass(User);