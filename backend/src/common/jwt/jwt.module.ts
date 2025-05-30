// src/common/jwt/jwt.module.ts
import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtService } from './jwt.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule,
    NestJwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class CustomJwtModule {}
