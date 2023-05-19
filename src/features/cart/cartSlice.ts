import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import type { MenuItem } from '../../types'
import type { ICartItem } from "../../types/interfaces"

interface ICartPayload {
  item: MenuItem
  amount?: number
}

export interface CartState {
  items: ICartItem[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartPayload>) => {
      const itemInCart = state.items.find((item) => item.menuItem.id === action.payload.item.id)
      if (itemInCart) {
        itemInCart.amount += action.payload.amount || 1
      } else {
        state.items.push({ menuItem: action.payload.item, amount: action.payload.amount || 1})
      }
    },
    removeItem: (state, action: PayloadAction<ICartPayload>) => {
      state.items = state.items.filter((item) => item.menuItem.id !== action.payload.item.id)
    },
    updateAmount: (state, action: PayloadAction<ICartPayload>) => {
      const item = state.items.find((item) => item.menuItem.id === action.payload.item.id)
      if (item && action.payload.amount) {
        item.amount = action.payload.amount
      }
    },
    incrementAmount: (state, action: PayloadAction<ICartPayload>) => {
      const item = state.items.find((item) => item.menuItem.id === action.payload.item.id)
      item && item.amount++
    },
    decrementAmount: (state, action: PayloadAction<ICartPayload>) => {
      const item = state.items.find((item) => item.menuItem.id === action.payload.item.id)
      if (item && item.amount > 0) {
        item.amount--
      }
    },
  },
})

export const { addItem, decrementAmount, incrementAmount, removeItem, updateAmount } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items
export const selectCartItemCount = (state: RootState) => {
  return state.cart.items.reduce((total, currentItem) => total + currentItem.amount, 0)
}
export const selectCartTotalPrice = (state: RootState) => {
  return state.cart.items.reduce((total, currentItem) => total + (currentItem.menuItem.price * currentItem.amount), 0.0)
}

export default cartSlice.reducer