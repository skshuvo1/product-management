import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRoutes } from './app/modules/products/products.routes'
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/products', productRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
