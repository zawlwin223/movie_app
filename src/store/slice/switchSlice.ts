import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SwitchState {
  trendingState: string
}

const initialState: SwitchState = {
  trendingState: 'Today',
}

export const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    setTrendingSwitch: (state, action: PayloadAction<string>) => {
      state.trendingState = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTrendingSwitch } = switchSlice.actions

export default switchSlice.reducer
