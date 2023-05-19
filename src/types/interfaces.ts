import { FC } from "react"
import { MenuItem } from "."

export interface IRoute {
  key: string
  title: string
  path: string
  enabled: boolean
  component: FC<{}>
}

export interface ICartItem {
  menuItem: MenuItem
  amount: number
}
