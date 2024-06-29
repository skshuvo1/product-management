import { Request, Response } from 'express'
import { productServices } from './product.services'

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body

  const result = await productServices.createProductIntoDB(productData)
  res.json({
    success: true,
    message: 'product created successfully',
    data: result,
  })
}

export const productController = {
  createProduct,
}
