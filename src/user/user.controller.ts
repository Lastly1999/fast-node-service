import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { TestUserDto } from './dto/test-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }


  @Get()
  testUserModule() {
    return this.userService.getAllUser()
  }

  @Post()
  testUserPost(@Body() testUserDto: TestUserDto) {
    console.log(testUserDto.name)
    return "test"
  }
}  