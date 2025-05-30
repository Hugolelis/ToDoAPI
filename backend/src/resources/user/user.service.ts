import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';
import { JwtService } from 'src/common/jwt/jwt.service';

import { UpdateDTO } from './dto/update-dto';
import * as bcrypt from 'bcrypt';
import { DeleteDTO } from './dto/delete-dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService, private JwtService: JwtService){}

    async updateService(body: UpdateDTO, req: Request) {
        if(body.password !== body.confirmPassword) throw new BadRequestException('Passwords do not match.')
        
        const user = await this.prisma.user.findUnique({ where: { email: body.email, deletedAt: null }})

        if(!user) throw new UnauthorizedException('User not exist.')

        const checkPassword = await bcrypt.compare(body.password, user!.password);

        if(!checkPassword) throw new UnauthorizedException('Incorrect password.')

        const token = await this.JwtService.getToken(req)
        const userToken = await this.JwtService.getUserByToken(token)

        if(user.id != userToken!.id) throw new UnauthorizedException()

        if(checkPassword && body.newPassword) {
            const salt = bcrypt.genSaltSync(6)
            const hashedPassword = await bcrypt.hash(body.newPassword, salt);

            user.password = hashedPassword
        }

        user.name = body.name

        try {
            await this.prisma.user.update({ where: { email: user.email }, data: user })
            return { message: 'User updated successfully.'}
        } catch(e) {
            throw new InternalServerErrorException()
        }
    }

    async deleteService(body: DeleteDTO, req: Request) {
        const token = await this.JwtService.getToken(req)
        const userToken = await this.JwtService.getUserByToken(token)

        const user = await this.prisma.user.findUnique({ where: {email: body.email, deletedAt: null }})

        if(!user) throw new UnauthorizedException()

        if(userToken!.id != user!.id) throw new UnauthorizedException()

        const checkPassword = await bcrypt.compare(body.password, user!.password);

        if(!checkPassword) throw new UnauthorizedException('Incorrect password.')

        const date = new Date()

        try {
            await this.prisma.user.update({ where: { email: user.email }, data: { deletedAt: date } })

            return { message: "User delete successfully." }
        } catch(e) {
            throw new InternalServerErrorException()
        }
    }

}
