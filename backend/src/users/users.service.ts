import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './dto/user.dto';

@Injectable()
export class UsersService {
  private readonly mockUsers: User[] = [
    { id: 1, email: 'test@gmail.com', password: 'test' },
  ];

  login(id: number): string {
    const userExists = this.mockUsers.filter((user) => user.id === id);
    if (userExists) {
      return 'Login successful';
    } else {
      throw new NotFoundException('User not found');
    }
  }
}
