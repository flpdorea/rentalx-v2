import { Category } from '../../../database/entity/cars/Category'

interface ICreateCategoryDTO {
    name: string,
    description: string
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category | null>
    list(): Promise<Category[]>
    create({ name, description }: ICreateCategoryDTO): Promise<void>
}

export { ICategoriesRepository, ICreateCategoryDTO }
