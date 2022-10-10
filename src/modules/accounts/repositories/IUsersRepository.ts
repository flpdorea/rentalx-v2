import { User } from '../../../database/entity/accounts/User'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'

export interface IUsersRepository {
    findByEmail(email: string): Promise<User | null>
    create(data: ICreateUserDTO): Promise<void>
    findById(id: string): Promise<User | null>
}
