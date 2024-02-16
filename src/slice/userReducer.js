import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUser: false,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isUser = true;
    },
    removeUser: (state) => {
      state.isUser = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
