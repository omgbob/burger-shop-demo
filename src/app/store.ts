import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import cartReducer from "../features/cart/cartSlice"
import menuReducer, { menuLoaded } from "../features/menu/menuSlice"
import items from '../data/items.json'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    menuItems: menuReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

store.dispatch(menuLoaded(items))