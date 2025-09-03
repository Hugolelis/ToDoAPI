import { Body, Controller, Patch, Req } from '@nestjs/common';

import { UserService } from './user.service';

import { UpdateDTO } from './dto/update-dto';
import { DeleteDTO } from './dto/delete-dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch('update')
  update(@Body() UpdateDTO: UpdateDTO, @Req() req: Request) {
    return this.userService.updateService(UpdateDTO, req)
  }

  @Patch('delete')
  delete(@Body() DeleteDTO: DeleteDTO, @Req() req: Request) {
    return this.userService.deleteService(DeleteDTO, req)
  }
}
