import { configureStore } from '@reduxjs/toolkit'
import catBreedSliceReducer from '../feature/feed/slices/currentCatBreedSlice'

export const store = configureStore({
  reducer: {
    catBreedFilter: catBreedSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
