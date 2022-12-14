import { AppError } from '../../../../shared/errors/AppErrors'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

let authenticateUserUseCase: AuthenticateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory
let createUserUseCase: CreateUserUseCase

describe('authenticate user', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
  })


  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '1234',
      email: 'test@test.com',
      password: '1234',
      name: 'test'
    }

    await createUserUseCase.execute(user)

    const result = await authenticateUserUseCase.execute({ email: user.email, password: user.password})

    expect(result).toHaveProperty('token')
  })


  it('should not be able to authenticate a nonexistent user', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({ email: 'false', password: 'false'})
    }).rejects.toBeInstanceOf(AppError)
  })


  it('should not be able to authenticate user with wrong password', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '1234',
        email: 'user@user.com',
        password: '1234',
        name: 'user'
      }

      await createUserUseCase.execute(user)

      await authenticateUserUseCase.execute({ email: user.email, password: ''})
    }).rejects.toBeInstanceOf(AppError)
  })
})
