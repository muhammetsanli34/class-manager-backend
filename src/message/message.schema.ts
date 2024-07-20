import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop()
  text: string;

  @Prop()
  sender_id: number;

  @Prop()
  receiver_id: number;

  @Prop()
  created_at: Date;
}
