import express from 'express'
import { AppDataSource } from './data-source'
import { router } from './routes'
import './shared/container'

const app = express()

app.use(express.json())
app.use(router)

app.listen(3000, () => console.log('Server is running!'))

AppDataSource.initialize()
