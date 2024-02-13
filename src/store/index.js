import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "../slice/speedNumber";

export default configureStore({
  reducer: {
    number: numberReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
