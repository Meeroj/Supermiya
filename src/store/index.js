import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "../slice/speedNumber";
import userReducer from "../slice/userReducer";

export default configureStore({
  reducer: {
    number: numberReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
