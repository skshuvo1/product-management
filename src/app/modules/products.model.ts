import { Schema, model } from 'mongoose'
import { Inventory, Products, Variants } from './products/products.interface'

// Define the Variants Schema
const variantsSchema = new Schema<Variants>({
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
const inventorySchema = new Schema<Inventory>({
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
const productSchema = new Schema<Products>({
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
})

// Create the Product model
const Product = model<Products>('Product', productSchema)

export default Product
