import { Server } from 'http'
import mongoose from 'mongoose'
import envObj from '../src/config/index'
import app from './app'
import { errorLogger, logger } from './shared/logger'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server
async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${envObj.dbUser}:${envObj.dbPass}@cluster0.bhwsqpg.mongodb.net/university-management?retryWrites=true&w=majority`
    )
    server = app.listen(envObj.port, () => {
      logger.info(`Example app listening on port ${envObj.port}`)
    })

    logger.info('Database connected successfully')
  } catch (error) {
    errorLogger.error('Failed to connect Database', error)
  }

  process.on('unhandledRejection', error => {
    console.log('Unhandled rejection is detected, closing server')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

main()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
