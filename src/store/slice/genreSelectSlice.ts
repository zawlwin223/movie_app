import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

export interface Genre {
  genreState: string | null
}

const initialState: Genre = {
  genreState: 'All',
}

export const genreSelectSlice = createSlice({
  name: 'genreSelect',
  initialState,
  reducers: {
    setSelectGenre: (state, action: PayloadAction<string>) => {
      state.genreState = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectGenre } = genreSelectSlice.actions

export default genreSelectSlice.reducer
