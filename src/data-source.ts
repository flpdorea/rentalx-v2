import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { Category } from './database/entity/cars/Category'
import { Specification } from './database/entity/cars/Specification'

import { CreateCategories1664740329592 } from './database/migration/1664740329592-CreateCategories'
import { CreateSpecifications1664908935866 } from './database/migration/1664908935866-CreateSpecifications'
import { CreateUsers1665010616433 } from './database/migration/1665010616433-CreateUsers'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'docker',
  password: 'password',
  database: 'rentalx',
  synchronize: true,
  logging: false,
  entities: [Category, Specification],
  migrations: [
    CreateCategories1664740329592, 
    CreateSpecifications1664908935866,
    CreateUsers1665010616433
  ],
  subscribers: [],
})
