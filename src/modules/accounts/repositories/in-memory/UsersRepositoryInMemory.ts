import { User } from '../../../../database/entity/accounts/User'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUsersRepository } from '../IUsersRepository'

export class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = []

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email)

    if (user) {
      return user
    }
    return null
  }

  async create({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {
    const user = new User()
    Object.assign(user, { name, email, driver_license, password })

    this.users.push(user)
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find(user => user.id === id)

    if (user) {
      return user
    }
    return null
  }
}
