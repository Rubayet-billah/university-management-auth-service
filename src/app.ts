import express, { Application } from 'express'
import cors from 'cors'
import router from './app/modules/users/users.route'

const app: Application = express()

// cors

app.use(cors())

// parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
