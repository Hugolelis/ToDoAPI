import { Module } from '@nestjs/common';

import { UserService } from './user.service';

import { UserController } from './user.controller';

import { CustomJwtModule } from 'src/common/jwt/jwt.module';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule, CustomJwtModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
