import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './dto/user.dto';

@Injectable()
export class UsersService {
  private readonly mockUsers: User[] = [
    { email: 'test@gmail.com', password: 'test' },
  ];

  login(userData: User): string {
    console.log('userData', userData);
    const userExists = this.mockUsers.find(
      (user) => user.email === userData.email,
    );
    if (userExists) {
      return 'Login successful';
    } else {
      throw new NotFoundException('User not found');
    }
  }
}
