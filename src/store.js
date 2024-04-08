import {configureStore} from "@reduxjs/toolkit"
import authSlice from './authslice'
const store = configureStore({
  //store has only one parameter reducer, it needs to know about users
  reducer: {
    auth: authSlice,
    //TODO: add more slices here for posts
  },
});

export default store 