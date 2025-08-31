import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SwitchState {
  filmToWatchState: string
}

const initialState: SwitchState = {
  filmToWatchState: 'movie',
}

export const filmToWatchSwitchSlice = createSlice({
  name: 'filmToWatchSwitch',
  initialState,
  reducers: {
    setFilmToWatchSwitch: (state, action: PayloadAction<string>) => {
      if (action.payload === 'Movies') {
        state.filmToWatchState = 'movie'
      }
      if (action.payload === 'Series') {
        state.filmToWatchState = 'tv'
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFilmToWatchSwitch } = filmToWatchSwitchSlice.actions

export default filmToWatchSwitchSlice.reducer
