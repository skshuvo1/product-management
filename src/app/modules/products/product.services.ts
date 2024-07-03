import { Types } from 'mongoose'
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

const getProductById = async (id: string) => {
  const result = await Product.findById(id)

  return result
}

const updateProductById = async (id: string, updateData: TProducts) => {
  const objectId = new Types.ObjectId(id)
  const result = await Product.findByIdAndUpdate(
    objectId,
    { $set: updateData },
    {
      new: true,
    },
  )

  return result
}

const deleteProductFromDB = async (id: string) => {
  const result = await Product.updateOne({ id }, { isDeleted: true })
  return result
}

const searchProductFromDB = async (searchTerm: string) => {
  const searchRegex = new RegExp(searchTerm, 'i')
  const products = await Product.find({
    $or: [
      { name: { $regex: searchRegex } },
      { description: { $regex: searchRegex } },
    ],
  })
  return products
}

export const productServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getProductById,
  updateProductById,
  deleteProductFromDB,
  searchProductFromDB,
}
