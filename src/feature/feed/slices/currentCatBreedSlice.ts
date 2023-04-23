import { RootState } from '@/store'
import { Cat } from '@/types/Cat'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type CatBreedState = {
  currentBreed: string
  currentCatName: string
  cats?: Cat[]
}

const initialState: CatBreedState = {
  currentBreed: '',
  currentCatName: '',
  cats: [],
}

export const catBreedSlice = createSlice({
  name: 'catBreedFilter',
  initialState,
  reducers: {
    setBreed: (state: CatBreedState, action: PayloadAction<CatBreedState>) => {
      const { currentBreed, currentCatName } = action.payload
      state.currentBreed = currentBreed
      state.currentCatName = currentCatName
    },
    clearAllData: (state: CatBreedState) => {
      state.currentBreed = ''
      state.currentCatName = ''
      state.cats = []
    },
    setCats: (state: CatBreedState, action: PayloadAction<Cat[]>) => {
      state.cats = [...action.payload]
    },
    clearCats: (state: CatBreedState) => {
      state.cats = []
    },
  },
})

export const { setBreed, clearAllData, setCats, clearCats } = catBreedSlice.actions

export default catBreedSlice.reducer

export const selectCatBreed = (state: RootState) => state.catBreedFilter.currentBreed

export const selectCatName = (state: RootState) => state.catBreedFilter.currentCatName

export const selectCats = (state: RootState) => state.catBreedFilter.cats
