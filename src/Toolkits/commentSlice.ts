import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
}
const commentSlice = createSlice({
  name: 'commentSlice',
  initialState,
  reducers: {
    setCommentList: (state, action) => {
      state.comments = action.payload
    },
  },
  });
  
  export const { setCommentList } = commentSlice.actions;
  export default commentSlice.reducer;