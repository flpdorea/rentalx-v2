import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { User } from '../../../modules/accounts/infra/typeorm/entities/User'
import { Category } from '../../../modules/cars/infra/typeorm/entities/Category'
import { Specification } from '../../../modules/cars/infra/typeorm/entities/Specification'

import { CreateCategories1664740329592 } from './migration/1664740329592-CreateCategories'
import { CreateSpecifications1664908935866 } from './migration/1664908935866-CreateSpecifications'
import { CreateUsers1665010616433 } from './migration/1665010616433-CreateUsers'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'docker',
  password: 'password',
  database: 'rentalx',
  synchronize: true,
  logging: false,
  entities: [Category, Specification, User],
  migrations: [
    CreateCategories1664740329592, 
    CreateSpecifications1664908935866,
    CreateUsers1665010616433
  ],
  subscribers: [],
})
