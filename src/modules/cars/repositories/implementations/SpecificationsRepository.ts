import { Repository } from 'typeorm'
import { AppDataSource } from '../../../../data-source'
import { Specification } from '../../../../database/entity/Specification'
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>

    constructor() {
      this.repository = AppDataSource.getRepository(Specification)
    }

    async findByName(name: string): Promise<Specification | null> {
      const specification = await this.repository.findOne({where: {name: name}})
      return specification
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
      const specification = this.repository.create({name, description})
      await this.repository.save(specification)
    }
}

export { SpecificationsRepository }
