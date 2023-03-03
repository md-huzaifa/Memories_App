import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as api from "../api";
import { PostsState, PostStateInterface } from "../interfaces/post_interface";
import type { RootState } from "../store/store";

const initialState: PostsState = {
  posts: [],
  loading: "not loaded",
};

export const getPosts = createAsyncThunk<PostStateInterface[]>(
  "posts/fetchAllPosts",
  async () => {
    const { data } = await api.fetchPosts();

    return data as PostStateInterface[];
  }
);

export const sendPostsThunk = createAsyncThunk(
  "posts/insertPost",
  async (post: PostStateInterface) => {
    try {
      const { data } = await api.insertPost(post);

      return data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const updatePostThunk = createAsyncThunk(
  "posts/updatePost",
  async ({
    currentId,
    postData,}: {
    currentId: string;
    postData: PostStateInterface;
  }) => {
    try {
      const id = currentId;
      const post = postData;
      const { data } = await api.updatePost(id, post);
      return data;
    } catch (error: any) {
      return error.message;
    }
  }
);

export const deletePostThunk = createAsyncThunk(
  "posts/deletePost",
  async (id: string) => {
    try {
      const {data} = await api.deletePost(id);
      return data
    } catch (error: any) {
      return error.message;
    }
  }
);

export const likePostThunk = createAsyncThunk(
  "posts/likePost",
  async (id:string) => {
    try{
      const {data} = await api.likePost(id);
      return data
    }catch(error:any){
      return error.message
    }
  }
)

const fetchAllPostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    cleanupPosts: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = "loading";
        state.posts = [];
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        (state.loading = "loaded"), (state.posts = action.payload || []);
      })
      .addCase(getPosts.rejected, (state, action) => {
        (state.loading = "error"), (state.error = action.error.message);
      })
      .addCase(
        sendPostsThunk.fulfilled,
        (state, action: PayloadAction<PostStateInterface>) => {
          state.posts.push(action.payload);
        }
      )
      .addCase(
        updatePostThunk.fulfilled,
        (state, action: PayloadAction<PostStateInterface>) => {
          const index = state.posts.findIndex(
            (post) => post._id === action.payload._id
          );
          state.posts[index] = action.payload;
        }
      )
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.posts = state.posts.filter(
          (post) => post._id !== action.meta.arg
        );
      })
      .addCase(likePostThunk.fulfilled,(state,action) => {
        const index = state.posts.findIndex((p) => p._id === action.meta.arg)
        state.posts[index] = action.payload
      })
      ;
  },
});

export default fetchAllPostSlice.reducer;
export const { cleanupPosts } = fetchAllPostSlice.actions;
export const postSelector = (state: RootState) => state.post;
