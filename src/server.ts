import express from 'express'
import { AppDataSource } from './data-source'
import { Category } from './database/entity/User'

const app = express()

app.use(express.json())

app.listen(3000, () => console.log('Server is running!'))

AppDataSource.initialize()
  .then(async () => {

    console.log('Inserting a new user into the database...')
    const user = new Category()
    user.name = 'Saw'
    user.description = '25'

    await AppDataSource.manager.save(user)
    console.log('Saved a new user with id: ' + user.id)

    console.log('Loading users from the database...')
    const users = await AppDataSource.manager.find(Category)
    console.log('Loaded users: ', users)

  }).catch(error => console.log(error))
