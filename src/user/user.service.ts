import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  getAllUser() {
    return [
      {
        user: "1234",
        name: "1234"
      }
    ]
  }
}
