import { User } from '../../../database/entity/accounts/User'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'

export interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<User | null>
    findById(id: string): Promise<User | null>
}
