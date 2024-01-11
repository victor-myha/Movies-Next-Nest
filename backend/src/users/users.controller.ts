import { Controller, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(':id')
  login(@Param('id') id: number): string {
    return this.usersService.login(id);
  }
}
