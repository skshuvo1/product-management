import { TProducts } from './products.interface'
import Product from './products.model'

const createProductIntoDB = async (payLoad: TProducts) => {
  const result = await Product.create(payLoad)

  return result
}

const getAllProductFromDB = async () => {
  const result = await Product.find()

  return result
}

export const productServices = {
  createProductIntoDB,
  getAllProductFromDB,
}
