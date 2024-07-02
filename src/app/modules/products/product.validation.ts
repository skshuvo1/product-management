import { z } from 'zod'

// Define the Variants Schema
const variantsSchema = z.object({
  type: z.string().nonempty(),
  value: z.string().nonempty(),
})

// Define the Inventory Schema
const inventorySchema = z.object({
  quantity: z.number().int().min(0),
  inStock: z.boolean(),
})

// Define the Products Schema
const productSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  price: z.number().positive(),
  category: z.string().nonempty(),
  tags: z.tuple([z.string().nonempty()]),
  variants: z.array(variantsSchema),
  inventory: inventorySchema,
  isDeleted: z.boolean().optional().default(false),
})

export default productSchema
