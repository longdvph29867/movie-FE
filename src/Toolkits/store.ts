import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './movieSlice';
import watchVideoSlice from './watchVideoSlice';
import chairSlice from './chairSlice';

const  store = configureStore({
  reducer: {
    movieSlice,
    watchVideoSlice,
    chairSlice
  },
});
export default store
