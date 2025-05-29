import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';

@Injectable()
export class JwtService {
    constructor(private readonly jwt: NestJwtService) {}

    async generateVerificationToken(name: string, email: string) {
        const payload = { name, email };
        return this.jwt.signAsync(payload);
    }
    
}