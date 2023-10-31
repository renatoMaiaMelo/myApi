import {
  RolePaginateProperties,
  RolesRepository,
} from '@roles/repositories/RoleRepository'

type ListRolesUseCaseParams = {
  page: number
  limit: number
}

export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({
    limit,
    page,
  }: ListRolesUseCaseParams): Promise<RolePaginateProperties> {
    const take = limit
    const skip = (Number(page) - 1) * take
    return await this.rolesRepository.findAll({ page, skip, take })
  }
}
