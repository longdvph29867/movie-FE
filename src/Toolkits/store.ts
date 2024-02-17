import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './movieSlice';
import actorReducer from "../Toolkits/actorSlice"; 
const  store = configureStore({
  reducer: {
    movieSlice, 
    actorSlice: actorReducer,
  },
});
export default store
