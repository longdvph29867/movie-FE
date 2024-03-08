import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './movieSlice';
import watchVideoSlice from './watchVideoSlice';
import chairSlice from './chairSlice';
import spinnerSlice from './spinnerSlice';

const  store = configureStore({
  reducer: {
    movieSlice,
    watchVideoSlice,
    chairSlice,
    spinnerSlice
  },
});
export default store
