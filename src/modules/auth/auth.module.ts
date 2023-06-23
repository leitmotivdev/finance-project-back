import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { usersProvider } from '../database/providers/user.providers';

@Module({
  exports: [PassportModule],
  controllers: [AuthController],
  providers: [AuthService, ...usersProvider, JwtStrategy],
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class AuthModule {}
