import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelper } from '../../../helpers/jwtHelper';
import { User } from '../user/user.model';
import { ILoginUser, ILoginUserResponse } from './auth.interface';

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { id, password } = payload;

  const ifUserExist = await User.isUserExist(id);
  if (!ifUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User doesn't exist");
  }

  if (
    ifUserExist.password &&
    !(await User.isPasswordMatch(password, ifUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Wrong password');
  }
  const { id: userId, role, needsPasswordChange } = ifUserExist;

  const accessToken = jwtHelper.createToken(
    { userId, role },
    config.jwt.secret as string,
    config.jwt.expire_in as string
  );
  const refreshToken = jwtHelper.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expire_in as string
  );

  return {
    accessToken,
    refreshToken,
    needsPasswordChange,
  };
};

export const AuthService = {
  loginUser,
};
