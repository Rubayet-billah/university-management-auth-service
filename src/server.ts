import mongoose from 'mongoose'
import envObj from '../src/config/index'
import app from './app'
import { errorLogger, logger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${envObj.dbUser}:${envObj.dbPass}@cluster0.bhwsqpg.mongodb.net/university-management?retryWrites=true&w=majority`
    )
    app.listen(envObj.port, () => {
      logger.info(`Example app listening on port ${envObj.port}`)
    })

    logger.info('Database connected successfully')
  } catch (error) {
    errorLogger.error('Failed to connect Database', error)
  }
}

main()
