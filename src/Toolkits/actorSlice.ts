
import { createSlice } from "@reduxjs/toolkit";
import { Actor } from "../types/actors";

const initialState = {
  actorList: [] as Actor[],
};

const actorSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {
    setActorList(state, action) {
      state.actorList = action.payload;
    },
  },
});

export const { setActorList } = actorSlice.actions;

export default actorSlice.reducer;
