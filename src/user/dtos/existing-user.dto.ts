import { IsEmail, MinLength } from 'class-validator';

export class ExistingUserDTO {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  isAdmin: boolean;
}
