import { Repository } from 'typeorm'
import { AppDataSource } from '../../../../data-source'
import { Category } from '../../../../database/entity/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository{

  private repository: Repository<Category>

  private static INSTANCE: CategoriesRepository

  constructor() {
    this.repository = AppDataSource.getRepository(Category)
  }

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository()
  //   }
  //   return CategoriesRepository.INSTANCE
  // }

  async create({name, description}: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({name, description})
    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await this.repository.findOne({where: {name: name}})
    return category
  }
}

export { CategoriesRepository }
