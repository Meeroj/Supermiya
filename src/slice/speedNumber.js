import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: [],
  getNumber: [],
  isNumberStart: false,
  numberTime: null,
  system: 2,
};

export const numberSlice = createSlice({
  name: "Number",
  initialState,
  reducers: {
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    getNumber: (state, action) => {
      state.getNumber = action.payload;
    },
    numberStarting: (state, action) => {
      state.isNumberStart = true;
      state.numberTime = action.payload;
    },
    numberFinishing: (state) => {
      state.isNumberStart = false;
    },
    setSystem: (state, action) => {
      state.system = action.payload;
    },
  },
});

export const {
  setNumber,
  getNumber,
  numberStarting,
  numberFinishing,
  setSystem,
} = numberSlice.actions;
export default numberSlice.reducer;
