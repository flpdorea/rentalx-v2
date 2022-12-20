import { AppError } from '../../../../shared/errors/AppErrors'
import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory'
import { CreateCarUseCase } from './CreateCarUseCase'

let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe('create car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
  })

  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name',
      description: 'description',
      daily_rate: 10,
      license_plate: 'plate',
      fine_amount: 10,
      brand: 'brand',
      category_id: 'category'
    })

    expect(car).toHaveProperty('id')
  })

  it('should not be able to create a new car with existing license plate', async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Car1',
        description: 'description',
        daily_rate: 10,
        license_plate: 'plate',
        fine_amount: 10,
        brand: 'brand',
        category_id: 'category'
      })

      await createCarUseCase.execute({
        name: 'Car2',
        description: 'description',
        daily_rate: 10,
        license_plate: 'plate',
        fine_amount: 10,
        brand: 'brand',
        category_id: 'category'
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to create a car with avaiable true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car1',
      description: 'description',
      daily_rate: 10,
      license_plate: 'plate1',
      fine_amount: 10,
      brand: 'brand',
      category_id: 'category'
    })
    
    expect(car.avaiable).toBe(true)
  })
})
