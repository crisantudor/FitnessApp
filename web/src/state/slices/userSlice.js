import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.data = action.payload;
        state.isAuthenticated = true;
    },
    logoutUser: state => {
      state.data = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
