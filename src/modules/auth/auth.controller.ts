import { Response } from 'express';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from '../database/entities/user.entity';
import { Controller, Post, Res, Body, Inject, HttpCode } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly userModel: typeof User,
  ) {}

  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  async signUp(
    @Res() res: Response,
    @Body() { name, email, password }: SignUpDto,
  ) {
    const user = await this.userModel.create({
      name,
      email,
      password,
    });

    return res.json({ success: true, user });
  }
}
