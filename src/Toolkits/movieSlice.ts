import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  trailerActive: null,
}
const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setMovieList: (state, action) => {
      state.movieList = action.payload
    },
    setTrailerActive: (state, action) => {
      state.trailerActive = action.payload
    },
  },
  });
  
  export const { setMovieList, setTrailerActive } = movieSlice.actions;
  export default movieSlice.reducer;