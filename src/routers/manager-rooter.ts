import express from 'express';
import { userController } from '@/controllers/manager-controller';

export const userRouter: express.Router = express.Router();

userRouter.post('/', userController.getUsers);
