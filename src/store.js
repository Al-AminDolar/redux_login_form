import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/redux/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
