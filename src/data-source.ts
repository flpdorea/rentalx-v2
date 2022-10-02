import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Category } from './database/entity/User'
import { CreateCategories1664740329592 } from './database/migration/1664740329592-CreateCategories'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'docker',
  password: 'password',
  database: 'rentalx',
  synchronize: true,
  logging: false,
  entities: [Category],
  migrations: [CreateCategories1664740329592],
  subscribers: [],
})
