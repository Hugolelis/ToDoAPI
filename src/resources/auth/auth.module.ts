import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';

import { AuthController } from './auth.controller';

import { PrismaModule } from 'src/database/prisma.module';
import { CustomJwtModule } from 'src/common/jwt/jwt.module';

@Module({
  imports: [PrismaModule, CustomJwtModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
