import { createRolesController } from '@roles/useCases/createRole'
import { listsRolesController } from '@roles/useCases/listRoles'
import { Router } from 'express'

const rolesRouter = Router()

rolesRouter.post('/', (req, res) => {
  return createRolesController.handle(req, res)
})

rolesRouter.get('/', (req, res) => {
  return listsRolesController.handle(req, res)
})

export { rolesRouter }
