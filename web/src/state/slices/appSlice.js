import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleTheme, setLoading } = appSlice.actions;
export default appSlice.reducer;
