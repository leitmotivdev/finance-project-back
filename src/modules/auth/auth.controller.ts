import { Response } from 'express';
import { Controller, Res, HttpCode } from '@nestjs/common';
import { Body, HttpStatus, Inject, Post } from '@nestjs/common';

import { RegisterDto } from './dto/register.dto';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  @Inject(UserService)
  private readonly userService: UserService;

  @Post('register')
  @HttpCode(HttpStatus.OK)
  async registerAuth0User(@Res() res: Response, @Body() { sub }: RegisterDto) {
    const user = await this.userService.createUser(sub);

    return res.json({
      succes: true,
      message: 'User created succesful',
      data: user,
    });
  }
}
