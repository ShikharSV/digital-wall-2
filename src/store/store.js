import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userS";
import blogReducer from "./blogS";
import wallReducer from "./wallS";

const store = configureStore({
    reducer: {
      users: userReducer,
      blogs: blogReducer,
      walls: wallReducer,
    },
  });
  
  export default store;