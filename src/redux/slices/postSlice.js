import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "",
};

export const getPostData = createAsyncThunk("posts", async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  const data = await res.json();
  return data;
});
const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    getPost: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostData.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      });
  },
});

export default postSlice.reducer;
