import { ForbiddenException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';

import { JwtService } from 'src/common/jwt/jwt.service';
import { PrismaService } from 'src/database/prisma.service';

import { CreateTasksDTO } from './dto/create-task-dto';
import { UpdateTaskDTO } from './dto/update-task-dto';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService, private jwtService: JwtService){}

    async getUserTasksService(req: Request) {
        const token = await this.jwtService.getToken(req)
        const user = await this.jwtService.getUserByToken(token)

        if(!user) throw new UnauthorizedException()
        
        try {
            const tasks = this.prisma.task.findMany({ where: {userId: user.id }})

            return tasks
        } catch(e) {
            throw new InternalServerErrorException()
        }
    }

    async createTaskService(body: CreateTasksDTO , req: Request) {
        const token = await this.jwtService.getToken(req)
        const user = await this.jwtService.getUserByToken(token)

        if(!user) throw new UnauthorizedException()
        
        try {
            const task = await this.prisma.task.create({ data: { ...body, userId: user.id } })

            return {
                data: task
            }
        } catch(e) {
            throw new InternalServerErrorException()
        }
    }

    async completeTaskService(id: number, req: Request) {
        const token = await this.jwtService.getToken(req)
        const user = await this.jwtService.getUserByToken(token)

        if(!user) throw new UnauthorizedException()

        const task = await this.prisma.task.findUnique({ where: { id } });

        if(!task || task.userId !== user.id) {
            throw new ForbiddenException('You cannot update this task');
        }

        try {
            await this.prisma.task.update({ where: { id: task.id }, data: { completed: !task.completed } })

            return { message: "Task status updated." }
        } catch(e) {
            throw new InternalServerErrorException()
        }
    }

    async updateTaskService(body: UpdateTaskDTO, id: number, req: Request) {
        const token = await this.jwtService.getToken(req)
        const user = await this.jwtService.getUserByToken(token)

        if(!user) throw new UnauthorizedException()

        const task = await this.prisma.task.findUnique({ where: { id } });

        if(!task || task.userId !== user.id) {
            throw new ForbiddenException('You cannot update this task');
        }

        try {
            const updateTask = await this.prisma.task.update({ where: { id: task.id }, data: { ...body } })

            return {
                message: "Task update successfully.",
                data: updateTask
            }
        } catch(e) {
            throw new InternalServerErrorException()
        }
    }

    async deleteTaskService(id: number, req: Request) {
        const token = await this.jwtService.getToken(req)
        const user = await this.jwtService.getUserByToken(token)

        if(!user) throw new UnauthorizedException()

        const task = await this.prisma.task.findUnique({ where: { id } });

        if(!task || task.userId !== user.id) {
            throw new ForbiddenException('You cannot update this task');
        }

        try {
            await this.prisma.task.delete({ where: { id: task.id }})

            return { message: "Task delete successfully." }
        } catch(e) {
            throw new InternalServerErrorException()
        }
    }
}
