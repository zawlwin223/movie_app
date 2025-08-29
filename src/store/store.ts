import { configureStore } from '@reduxjs/toolkit'
import switchSlice from './slice/switchSlice'

export const store = configureStore({
  reducer: {
    switch: switchSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
