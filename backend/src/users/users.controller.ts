import { Body, Controller, Post } from '@nestjs/common';
import { User } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  login(@Body() userData: User): string {
    return this.usersService.login(userData);
  }
}
