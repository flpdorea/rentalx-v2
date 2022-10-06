import { ICreateUserDTO } from '../dtos/ICreateUserDTO'

export interface IUsersRepositoty {
    create(data: ICreateUserDTO): Promise<void>
}
