import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class JwtService {
    constructor(private prisma: PrismaService, private readonly jwt: NestJwtService) {}

    async generateVerificationToken(id: number, name: string, email: string) {
        try {
            const payload = { id, name, email };
            return this.jwt.signAsync(payload);
        } catch(e) {
            throw new UnauthorizedException()
        }
    }
    

    getToken(req: any) {
        try {
            const authHeader = req.headers.authorization
            const token = authHeader!.split(" ")[1]
            return token
        } catch(e) {
            throw new UnauthorizedException()
        }
    }

    async getUserByToken(token: string) {
        if(!token) throw new UnauthorizedException()

        const decoded = await this.jwt.verifyAsync(token) 
        const userEmail = decoded.email

        const user = await this.prisma.user.findUnique({ where: { email: userEmail } })

        return user
    }
    
}