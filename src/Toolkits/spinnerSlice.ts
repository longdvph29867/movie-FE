import { createSlice } from '@reduxjs/toolkit';

const spinnerSlice = createSlice({
  name: 'spinner',
  initialState: {
    loading: false,
  },
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
  },
});

export const { startLoading, stopLoading } = spinnerSlice.actions;
export default spinnerSlice.reducer;
