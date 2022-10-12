import { Category } from '../../../../database/entity/cars/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository'

export class CategoriesRepositoryInMemory implements ICategoriesRepository {

  categories: Category[] = []

  async findByName(name: string): Promise<Category | null> {
    const category = this.categories.find(category => category.name === name)
    
    if (category) {
      return category
    }
    return null
  }

  async list(): Promise<Category[]> {
    return this.categories
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category()

    Object.assign(category, { name, description })

    this.categories.push(category)
  }
}
