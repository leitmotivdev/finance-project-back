import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { UserProviderRepository } from '../database/providers/user.provider';

@Module({
  controllers: [AuthController],
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [UserProviderRepository, JwtStrategy, AuthService, UserService],
})
export class AuthModule {}
