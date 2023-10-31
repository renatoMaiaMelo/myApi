import { RolesRepository } from '@roles/repositories/RoleRepository'
import { ListRolesUseCase } from './ListRolesUseCase'
import { ListRolesController } from './ListRolesController'

const rolesRepository = RolesRepository.getInstance()
const listRolesUseCase = new ListRolesUseCase(rolesRepository)
export const listsRolesController = new ListRolesController(listRolesUseCase)
