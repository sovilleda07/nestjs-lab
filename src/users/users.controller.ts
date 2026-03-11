import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/users')
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Post('/users')
  createUser(@Body() user: CreateUserDTO) {
    return this.usersService.createUser(user);
  }

  @Get('new')
  @HttpCode(201)
  somethingNew() {
    return 'Something new';
  }

  @Get('notfound')
  @HttpCode(404)
  notFoundPage() {
    return '404 not found';
  }

  @Get('error')
  @HttpCode(500)
  errorPage() {
    return 'Error Route!!';
  }
}
