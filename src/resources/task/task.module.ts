import { Module } from '@nestjs/common';

import { TaskService } from './task.service';

import { TaskController } from './task.controller';

import { PrismaModule } from 'src/database/prisma.module';
import { CustomJwtModule } from 'src/common/jwt/jwt.module';

@Module({
  imports: [PrismaModule, CustomJwtModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
