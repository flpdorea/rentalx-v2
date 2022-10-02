import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './database/entity/User'
import { User1664738076060 } from './database/migration/1664738076060-User'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'docker',
  password: 'password',
  database: 'rentalx',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [User1664738076060],
  subscribers: [],
})
