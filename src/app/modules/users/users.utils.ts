import { User } from './users.model'

export const generateUserId = async (): Promise<string> => {
  const lastUser = await User.findOne(
    {},
    { id: 1, _id: 0 },
    { sort: { createdAt: -1 }, lean: true }
  )

  if (lastUser && lastUser.id) {
    const lastId = parseInt(lastUser.id, 10)
    const nextId = (lastId + 1).toString().padStart(5, '0')
    return nextId
  }

  return '00001' // Return '00001' as the default if no user is found
}
