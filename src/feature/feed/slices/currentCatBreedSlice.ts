import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CatBreedState = {
  currentBreed: String;
}

const initialState: CatBreedState = {
  currentBreed: ""
};

export const catBreedSlice = createSlice({
  name: 'catBreedFilter',
  initialState,
  reducers: {
      setBreed: (state: CatBreedState, action: PayloadAction<String>) => {
        state.currentBreed = action.payload

        console.log("CURRENT STATE:" + state.currentBreed)
      },
      clearBreed: (state: CatBreedState) => {
        state.currentBreed = ""

        console.log("CURRENT STATE:" + state.currentBreed)
      }
  }
})
 
export const { setBreed, clearBreed } = catBreedSlice.actions

export default catBreedSlice.reducer