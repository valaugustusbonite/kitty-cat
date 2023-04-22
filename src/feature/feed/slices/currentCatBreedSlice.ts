import { RootState } from "@/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Cat = {
  url: string;
  id: string;
}

export type CatBreedState = {
  currentBreed: string;
  cats: Cat[]
}

const initialState: CatBreedState = {
  currentBreed: "",
  cats: []
};

export const catBreedSlice = createSlice({
  name: 'catBreedFilter',
  initialState,
  reducers: {
      setBreed: (state: CatBreedState, action: PayloadAction<string>) => {
        state.currentBreed = action.payload

        console.log("CURRENT BREED:" + state.currentBreed)
      },
      clearBreed: (state: CatBreedState) => {
        state.currentBreed = ""

        console.log("CURRENT BREED:" + state.currentBreed)
      },
      setCats: (state: CatBreedState, action: PayloadAction<Cat[]>) => {
        state.cats = [...action.payload]

        console.log("CURRENT CATS COUNT:" + state.cats.length)
      },
      clearCats:(state: CatBreedState) => {
        state.cats = []
      }
  }
})
 
export const { setBreed, clearBreed, setCats, clearCats } = catBreedSlice.actions

export default catBreedSlice.reducer

export const selectCatBreed = (state: RootState) => state.catBreedFilter.currentBreed

export const selectCats = (state: RootState) => state.catBreedFilter.cats