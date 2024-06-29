import { Request, Response } from 'express'
import { productServices } from './product.services'

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body

    const result = await productServices.createProductIntoDB(productData)
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'could not create product',
      error: err,
    })
  }
}
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductFromDB()
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'could not fetch product',
      error: err,
    })
  }
}

export const productController = {
  createProduct,
  getAllProduct,
}
