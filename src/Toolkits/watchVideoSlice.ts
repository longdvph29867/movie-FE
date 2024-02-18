import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  optionVideo: {
    isOpen: false,
    url: ''
  },
}
const watchVideoSlice = createSlice({
  name: 'watchVideo',
  initialState,
  reducers: {
    setOptionVideo: (state, action) => {
      state.optionVideo = action.payload
    },
  },
  });
  
  export const { setOptionVideo } = watchVideoSlice.actions;
  export default watchVideoSlice.reducer;