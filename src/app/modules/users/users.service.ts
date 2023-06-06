import envObj from '../../../config/index'
import ApiError from '../../../errors/ApiError'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // generate incremented id
  const id = await generateUserId()
  user.id = id
  // generate default password
  if (!user.password) {
    user.password = envObj.defaultUserPass as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(500, 'Create user failed')
  }
  return createdUser
}

export default {
  createUser,
}
