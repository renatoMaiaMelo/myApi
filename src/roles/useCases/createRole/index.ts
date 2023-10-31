import { RolesRepository } from '@roles/repositories/RoleRepository'
import { CreateRoleUseCase } from './CreateRoleUseCase'
import { CreateRoleCOntroller } from './CreateRoleController'

const rolesRepository = RolesRepository.getInstance()
const createRoleUseCase = new CreateRoleUseCase(rolesRepository)
export const createRolesController = new CreateRoleCOntroller(createRoleUseCase)
