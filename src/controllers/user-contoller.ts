import { Request, Response } from 'express';
import userService from '../services/user-service';

class UserController {
  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const user = await userService.createUser(name, email);
    res.json(user);
  }

  async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    res.json(users);
  }
}

export default new UserController();