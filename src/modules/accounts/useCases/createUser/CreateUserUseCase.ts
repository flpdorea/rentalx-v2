import { inject, injectable } from 'tsyringe'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUsersRepositoty } from '../../repositories/IUsersRepository'

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepositoty
  ) {}

  async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({ name, email, password, driver_license })
  }
}
