import express from 'express'
import { orderController } from './order.controller'

const router = express.Router()
router.post('/', orderController.createOrder)
router.get('/', (req, res) => {
  if (req.query.email) {
    return orderController.getOrderByEmail(req, res)
  }
  return orderController.getAllOrder(req, res)
})

export const orderRoutes = router
