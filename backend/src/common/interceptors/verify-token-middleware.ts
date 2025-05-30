import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class verifyTokenMiddleware implements NestMiddleware {
    constructor(private readonly jwtService: JwtService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        if(!req.headers.authorization) throw new UnauthorizedException()

        const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            const decoded = this.jwtService.verify(token);
            req['user'] = decoded;
            next();
        } catch (error) {
            throw new UnauthorizedException('Invalid token.');
        }
    }
}