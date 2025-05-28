import { Controller, Delete, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch('update')
  update() {

  }

  @Delete('delete')
  delete() {

  }
}
