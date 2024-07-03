import { TOrders } from './order.interface'
import Order from './order.model'

const createOrderIntoDB = async (payLoad: TOrders) => {
  const result = await Order.create(payLoad)
  return result
}

const getOrderFromDB = async () => {
  const result = await Order.find()
  return result
}

const findOrderByEmail = async (email: string) => {
  const result = await Order.find({ email })
  return result
}

export const orderServices = {
  createOrderIntoDB,
  getOrderFromDB,
  findOrderByEmail,
}
