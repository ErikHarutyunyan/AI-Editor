import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import userReducer from "./features/user/userSlice"
import postsReducer from "./features/posts/postsSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer,
    posts: postsReducer,
  },
});
