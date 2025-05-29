import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import { RegisterDTO } from './dto/register-dto';
import { LoginDTO } from './dto/login-dto';


@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDTO: RegisterDTO) {
    return this.authService.registerService(registerDTO)
  }

  @Post('login')
  login(@Body() loginDTO: LoginDTO) {
    return this.authService.loginService(loginDTO)
  }

}
