import { Schema, model } from 'mongoose'
import { TInventory, TProducts, TVariants } from './products.interface'

// Define the Variants Schema
const variantsSchema = new Schema<TVariants>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
})

// Define the Inventory Schema
const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
})

// Define the Products Schema
const productSchema = new Schema<TProducts>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantsSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

// Create the Product model
const Product = model<TProducts>('Product', productSchema)

export default Product
