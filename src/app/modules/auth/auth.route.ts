import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
const router = express.Router();

router.post(
  '/login-user',
  validateRequest(AuthValidation.loginUserZodSchema),
  AuthController.loginUser
);

export const AuthRoutes = router;
