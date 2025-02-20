import type { Request, Response } from 'express';
import { managerService} from '@/services';

class UserController {
  async getUsers(req: Request, res: Response) {
    res.send('hello world');
  }
}

export const userController = new UserController();
