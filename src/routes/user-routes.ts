import express from 'express';
import userController from '../controllers/user-contoller';

export const userRoutes = express.Router();

userRoutes.post('/users', userController.createUser);
userRoutes.get('/users', userController.getUsers);

