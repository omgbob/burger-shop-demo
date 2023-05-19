import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

import type { MenuItem } from "../../types"

const menuAdaptor = createEntityAdapter<MenuItem>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

export const menuSlice = createSlice({
  name: "menuItems",
  initialState: menuAdaptor.getInitialState(),
  reducers: {
    menuLoaded(state, action) {
      menuAdaptor.setAll(state, action.payload)
    }
  },
})

export default menuSlice.reducer

export const { menuLoaded } = menuSlice.actions

export const {
  selectById: selectMenuItemById,
  selectIds: selectMenuItemIds,
  selectEntities: selectMenuEntities,
  selectAll: selectAllMenuItems,
  selectTotal: selectTotalMenuItems
} = menuAdaptor.getSelectors<RootState>((state) => state.menuItems)
