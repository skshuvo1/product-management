import express from 'express'
import { productController } from './product.controller'

const router = express.Router()

router.post('/', productController.createProduct)
router.get('/', productController.searchProduct)
router.get('/', productController.getAllProduct)
router.get('/:productId', productController.getProductById)
router.put('/:productId', productController.updateProductById)
router.delete('/:productId', productController.deleteProductById)

export const productRoutes = router
