import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChairType } from "../types/chair";
type ChairState = {
  selectedChair: ChairType[];
}
const initialState: ChairState = {
  selectedChair: [],
}
const chairSlice = createSlice({
  name: 'chairSlice',
  initialState,
  reducers: {
    setSelectedChair: (state, action: PayloadAction<ChairType>) => {
    const newSelectChair = [...state.selectedChair];
    const index = newSelectChair.findIndex((item) => item._id === action.payload._id);
    if(index === -1) {
      newSelectChair.push(action.payload);
    } 
    else {
      newSelectChair.splice(index, 1);
    }
    state.selectedChair = newSelectChair;
    },
    clearSelectedChair: (state) => {
      state.selectedChair = [];
      },
  },
  });
  
  export const { setSelectedChair, clearSelectedChair } = chairSlice.actions;
  export default chairSlice.reducer;