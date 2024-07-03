import { Request, Response } from 'express'
import { orderServices } from './order.services'

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body

    const result = await orderServices.createOrderIntoDB(orderData)
    res.status(200).json({
      success: true,
      message: 'order created successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'could not create order',
      error: err,
    })
  }
}
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getOrderFromDB()
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch order',
      error: err,
    })
  }
}
const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string
    if (!email) {
      res.status(400).json({
        success: false,
        message: 'No email found',
      })
    }
    const result = await orderServices.findOrderByEmail(email)
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not find order',
      error: err,
    })
  }
}

export const orderController = {
  createOrder,
  getAllOrder,
  getOrderByEmail,
}
