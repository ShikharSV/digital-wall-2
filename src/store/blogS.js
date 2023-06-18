import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalBlogs: [],
  currentBlog: [],
};

export const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
      getTotalBlogs(state, action) {
        state.totalBlogs = action.payload;
      },
      getCurrentBlog(state, action) {
        state.currentBlog = action.payload;
      },
    },
  });
  
  export const { getTotalBlogs, getCurrentBlog } = blogSlice.actions;
  export default blogSlice.reducer;