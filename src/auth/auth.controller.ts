import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ExistingUserDTO } from 'src/user/dtos/existing-user.dto';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() user: NewUserDTO): Promise<UserDetails | null> {
    return this.authService.register(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.CREATED)
  login(
    @Body() user: ExistingUserDTO,
  ): Promise<{ email: string; token: string }> {
    return this.authService.login(user);
  }
}
