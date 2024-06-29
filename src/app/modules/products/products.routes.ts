import express from 'express'
import { productController } from './product.controller'

const router = express.Router()

router.post('/create-products', productController.createProduct)

export const productRoutes = router
