import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { User } from '../../../modules/accounts/infra/typeorm/entities/User'
import { Car } from '../../../modules/cars/infra/typeorm/entities/Car'
import { Category } from '../../../modules/cars/infra/typeorm/entities/Category'
import { Specification } from '../../../modules/cars/infra/typeorm/entities/Specification'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'docker',
  password: 'password',
  database: 'rentalx',
  synchronize: true,
  logging: false,
  entities: [Category, Specification, User, Car],
  migrations: ['./migration/*.ts'],
  subscribers: [],
})
