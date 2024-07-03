import { z } from 'zod'

const orderSchema = z.object({
  email: z.string().email(),
  productId: z.string().nonempty(),
  price: z.number(),
  quantity: z.number(),
})

// export default orderSchema
export type TOrders = z.infer<typeof orderSchema>
export { orderSchema }
