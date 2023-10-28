import { IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  sub: string;
}
