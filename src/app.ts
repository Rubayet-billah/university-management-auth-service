import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/errorHandlers'
import router from './app/modules/users/users.route'
import ApiError from './errors/ApiError'

const app: Application = express()

// cors

app.use(cors())

// parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', router)

app.get('/', async () => {
  throw new ApiError(400, 'baler request')
})

// error handler middleware
app.use(globalErrorHandler)

export default app
