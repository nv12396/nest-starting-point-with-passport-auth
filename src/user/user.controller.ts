import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Patch('/update-email/:id')
  updateEmail(
    @Param('id') id: string,
    @Body('email') email: string,
  ): Promise<any> {
    return this.userService.updateEmail(id, email);
  }
}
