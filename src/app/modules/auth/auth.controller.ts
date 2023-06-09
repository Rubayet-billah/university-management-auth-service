import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import config from '../../../config';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ILoginUserResponse } from './auth.interface';
import { AuthService } from './auth.service';

const loginUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...loginInfo } = req.body;
    const result = await AuthService.loginUser(loginInfo);
    const { refreshToken, ...others } = result;
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };
    res.cookie('refreshToken', refreshToken, cookieOptions);

    sendResponse<ILoginUserResponse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User logged in successfully!',
      data: others,
    });
  }
);

export const AuthController = {
  loginUser,
};
