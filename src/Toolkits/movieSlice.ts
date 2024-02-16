import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
}
const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setMovieList: (state, action) => {
      state.movieList = action.payload
    },
  },
  });
  
  export const { setMovieList } = movieSlice.actions;
  export default movieSlice.reducer;