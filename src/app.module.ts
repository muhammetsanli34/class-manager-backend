import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ClassModule } from './class/class.module';
import { MessageModule } from './message/message.module';
import { AssignmentModule } from './assignment/assignment.module';
import { MarkModule } from './mark/mark.module';
import { SubmissionModule } from './submission/submission.module';
import { NoticeModule } from './notice/notice.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UserModule, ClassModule, MessageModule, AssignmentModule, MarkModule, SubmissionModule, NoticeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
