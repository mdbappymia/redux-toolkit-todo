import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import postSlice from "../slices/postSlice";
import todoSlice from "../slices/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
    post: postSlice,
  },
});
