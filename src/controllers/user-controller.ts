import type { Request, Response } from 'express';
import userService from '@/services/user-service';

class UserController {
  async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    res.json(users);
  }
}

export default new UserController();