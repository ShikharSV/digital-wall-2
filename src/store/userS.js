const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentUser: [],
  totalUsers: [],
  favBlogs: [],
  userBlogs: [],
  userWalls: [],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      getTotalUsers(state, action) {
        state.totalUsers = action.payload;
      },
      getCurrentUser(state, action) {
        state.currentUser = action.payload;
      },
      getFavBlogs(state, action) {
        state.favBlogs = action.payload;
      },
      getUserBlogs(state, action) {
        state.userBlogs = action.payload;
      },
      getUserWalls(state, action) {
        state.userWalls = action.payload;
      },
    },
  });
  
  export const {
    getTotalUsers,
    getCurrentUser,
    getFavBlogs,
    getUserBlogs,
    getUserWalls,
  } = userSlice.actions;
  export default userSlice.reducer;
  