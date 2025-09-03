import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { TaskService } from './task.service';

import { CreateTasksDTO } from './dto/create-task-dto';
import { UpdateTaskDTO } from './dto/update-task-dto';

@Controller('api/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('userTasks')
  getUserTasks(@Req() req: Request) {
    return this.taskService.getUserTasksService(req)
  }

  @Post('create')
  createTaskService(@Body() body: CreateTasksDTO, @Req() req: Request) {
    return this.taskService.createTaskService(body, req)
  }

  @Patch('complete/:id')
  completeTask(@Param('id', ParseIntPipe) id: number, @Req() req: Request) {
    return this.taskService.completeTaskService(id, req)
  }

  @Patch('update/:id') 
  updateTask(@Body() body: UpdateTaskDTO, @Param('id', ParseIntPipe) id: number, @Req() req: Request) {
    return this.taskService.updateTaskService(body, id, req)
  }

  @Delete('delete/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number, @Req() req: Request) {
    return this.taskService.deleteTaskService(id, req)
  }
}
