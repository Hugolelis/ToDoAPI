import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from '../resources/user/user.module';
import { TaskModule } from '../resources/task/task.module';
import { AuthModule } from 'src/resources/auth/auth.module';


@Module({
  imports: [UserModule, TaskModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
