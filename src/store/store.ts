import { configureStore } from '@reduxjs/toolkit'
import trendingSwitchSlice from './slice/trendingSwitchSlice'
import filmToWatchSwitchSlice from './slice/filmToWatchSwitchSlice'
import genreSelectSlice from './slice/genreSelectSlice'

export const store = configureStore({
  reducer: {
    trendingSwitch: trendingSwitchSlice,
    filmToWatchSwitch: filmToWatchSwitchSlice,
    genreSelect: genreSelectSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
