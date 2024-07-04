import express from 'express'
import cors from 'cors'
import { productRoutes } from './app/modules/products/products.routes'
import { orderRoutes } from './app/modules/orders/order.route'
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

app.get('/', (req, res) => {
  res.send('Thats my assignment 2. Please check it carefully !')
})

export default app
