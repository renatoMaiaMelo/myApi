import express, { Request, Response } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import { routes } from './routes'
import { AppError } from '@shared/errors/AppError'

import swaggerFile from '../../swagger.json'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routes)

// Middleware para tratamento de error
// Esses parametros sao default do express e tem que ter todos eles
app.use((error: Error, req: Request, res: Response, next: Next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCodeError).json({
      status: 'error',
      message: error.messageError,
    })
  }
  console.log(error)
  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  })
})

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})

export { app }
