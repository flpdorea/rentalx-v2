import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppErrors'
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase'

export class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user

    const avatar_file = req.file?.filename

    if (!avatar_file) {
      throw new AppError('Invalid file!')
    }

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)

    await updateUserAvatarUseCase.execute({user_id: id, avatar_file})

    return res.status(204).send()
  }
}
