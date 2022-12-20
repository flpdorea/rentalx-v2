import { Repository } from 'typeorm'
import { ICreateCarDTO } from '../../../dtos/ICreateCarDTO'
import { ICarsRepository } from '../../../repositories/ICarsRepository'
import { Car } from '../entities/Car'
import { AppDataSource } from '../../../../../shared/infra/typeorm/data-source'

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>

  constructor() {
    this.repository = AppDataSource.getRepository(Car)
  }

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create(data)

    await this.repository.save(car)

    return car
  }

  async findByLicensePlate(license_plate: string): Promise<Car | null> {
    const car = await this.repository.findOne({where: {license_plate: license_plate}})

    return car
  }
}