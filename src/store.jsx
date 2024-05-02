import { configureStore } from "@reduxjs/toolkit";
import reducerFromPostSlice from "./pages/posts/postSlice";
import reducerFromUserSlice from "./pages/users/userSlice";

export const store = configureStore({
  reducer: {
    post: reducerFromPostSlice,
    user: reducerFromUserSlice,
  },
});