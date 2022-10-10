import { Repository } from 'typeorm'
import { AppDataSource } from '../../../../data-source'
import { User } from '../../../../database/entity/accounts/User'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUsersRepository } from '../IUsersRepository'

export class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor () {
      this.repository = AppDataSource.getRepository(User)
    }

    async create({name, email, driver_license, password}: ICreateUserDTO): Promise<void> {
      const user = this.repository.create({ name, email, driver_license, password })

      await this.repository.save(user)
    }

    async findByEmail(email: string): Promise<User | null> {
      const user = await this.repository.findOne({where: {email: email}})
      return user
    }

    async findById(id: string): Promise<User | null> {
      const user = await this.repository.findOne({where: {id: id}})
      return user
    }
    
}
