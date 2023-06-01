import mongoose from 'mongoose'
import app from './app'
import envObj from '../src/config/index'

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${envObj.dbUser}:${envObj.dbPass}@cluster0.bhwsqpg.mongodb.net/university-management?retryWrites=true&w=majority`
    )
    app.listen(envObj.port, () => {
      console.log(`Example app listening on port ${envObj.port}`)
    })

    console.log('Database connected successfully')
  } catch (error) {
    console.log('Failed to connect Database', error)
  }
}

main()
