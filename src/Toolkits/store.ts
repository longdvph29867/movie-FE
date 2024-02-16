import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './movieSlice';

const  store = configureStore({
  reducer: {
    movieSlice,
  },
});
export default store
