import { Request, Response } from 'express'
import { productServices } from './product.services'
import productSchema from './product.validation'

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body
    const zodParsedProductData = productSchema.parse(productData)

    const result =
      await productServices.createProductIntoDB(zodParsedProductData)
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    })
  }
}

const getAllProduct = async (req: Request, res: Response) => {
  const { searchTerm } = req.query
  if (searchTerm) {
    return searchProduct(req, res)
  }

  try {
    const result = await productServices.getAllProductFromDB()
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'could not fetch product',
      error: err,
    })
  }
}

const getProductById = async (req: Request, res: Response) => {
  const { productId } = req.params
  try {
    const result = await productServices.getProductById(productId)
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'could not fetch product',
      error: err,
    })
  }
}
const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const updateData = req.body

    const result = await productServices.updateProductById(
      productId,
      updateData,
    )
    if (updateData) {
      res.status(200).json({
        success: true,
        message: 'Products updated successfully!',
        data: result,
      })
    }
    res.status(200).json(updateProductById)
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'could not update product',
      error: err,
    })
  }
}
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id

    const result = await productServices.deleteProductFromDB(productId)
    res.status(200).json({
      success: true,
      message: 'Products deleted successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'could not delete product',
      error: err,
    })
  }
}

const searchProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string

    if (!searchTerm) {
      res
        .status(400)
        .send({ success: false, message: 'Search terms are required' })
      return
    }

    const result = await productServices.searchProductFromDB(searchTerm)
    res.status(200).json({
      success: true,
      message: 'Products found successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'could not found product',
      error: err,
    })
  }
}

export const productController = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  searchProduct,
}
