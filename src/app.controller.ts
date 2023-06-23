import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport/dist';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create/user')
  @UseGuards(AuthGuard('jwt'))
  createUser(@Body() user): string {
    console.log('user of the body', user);
    return { ...user, id: 1 };
  }
}
