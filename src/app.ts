import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { User } from './app/modules/users/users.model'
import router from './app/modules/users/users.route'

const app: Application = express()

// cors

app.use(cors())

// parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', router)

app.get('/', async (req: Request, res: Response) => {
  const users = await User.find({})
  res.status(200).json({
    data: users,
  })
})

export default app
