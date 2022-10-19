import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import '../../container'
import swaggerFile from '../../../swagger.json'
import { AppError } from '../../errors/AppErrors'
import { AppDataSource } from '../typeorm/data-source'

const app = express()

app.use(express.json())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json(err.message)
  }
  return res.status(500).json({status: 'error', message: `Internal server error - ${err.message}`})
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000, () => console.log('Server is running!'))

AppDataSource.initialize()
