export type TVariants = { type: string; value: string }

export type TInventory = {
  quantity: number
  inStock: boolean
}

export type TProducts = {
  name: string
  description: string
  price: number
  category: string
  tags: [string]
  variants: [TVariants]
  inventory: TInventory
}
