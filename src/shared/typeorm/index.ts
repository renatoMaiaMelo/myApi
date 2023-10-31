import { DataSource } from 'typeorm'
import { CreateRolesTable1698772298024 } from './migrations/1698772298024-CreateRolesTable'
import { Role } from '@roles/entities/Role'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1698772298024],
})
