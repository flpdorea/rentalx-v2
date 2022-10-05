import express from 'express'
import { AppDataSource } from './data-source'
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import './shared/container'
import swaggerFile from './swagger.json'

const app = express()

app.use(express.json())
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000, () => console.log('Server is running!'))

AppDataSource.initialize()
