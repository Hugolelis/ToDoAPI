import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';
import { JwtService } from 'src/common/jwt/jwt.service';
import * as bcrypt from 'bcrypt';

import { LoginDTO } from './dto/login-dto';
import { RegisterDTO } from './dto/register-dto';

import { UserCreateEntitie } from './entities/user-create-entitie';
import { SafeUserEntitie } from './entities/safe-user-entitie';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private JwtService: JwtService){}

    async registerService(body: RegisterDTO) {
        const userExist = await this.prisma.user.findUnique({ where: { email: body.email } } )

        if(userExist) throw new ConflictException('Email is already in use.')
        
        if(body.password !== body.confirmPassword) throw new BadRequestException('Passwords do not match.')
        
        const salt = bcrypt.genSaltSync(6)
        const hashedPassword = await bcrypt.hash(body.password, salt);
        
        const userData: UserCreateEntitie = {
            name: body.name,
            email: body.email,
            password: hashedPassword
        }

        const user = await this.prisma.user.create({ data: userData })

        const token = await this.JwtService.generateVerificationToken(user.id, user.name, user.email)

        return {
            data: user,
            token
        }
    }   

    async loginService(body: LoginDTO) {
        const user = await this.prisma.user.findUnique({ where: { email: body.email, deletedAt: null }})

        if(!user) throw new UnauthorizedException('Email is not registered.')

        const checkPassword = await bcrypt.compare(body.password, user.password);

        if(!checkPassword) throw new UnauthorizedException('Incorrect password.')

        const token = await this.JwtService.generateVerificationToken(user.id, user.name, user.email)

        const safeUser: SafeUserEntitie = {
            name: user.name,
            email: user.email
        }

        return {
            data: safeUser,
            token
        }
    }
}
