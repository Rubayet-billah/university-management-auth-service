import { Request, Response } from 'express'
import usersService from './users.service'

export const createUser = async (req: Request, res: Response) => {
  const user = req.body
  const result = await usersService.createUser(user)
  res.json(result)
}
