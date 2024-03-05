import { configureStore } from "@reduxjs/toolkit";
import {
  DataAPI,
  useGetAllMoviesQuery,
  useGetOneMovieByIdQuery,
  usePostOneMovieMutation,
  useDeleteOneMovieMutation,
  useUpdateOneMovieMutation,
} from "./API/DataAPI";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [DataAPI.reducerPath]: DataAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(DataAPI.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export {
  useGetAllMoviesQuery,
  useGetOneMovieByIdQuery,
  usePostOneMovieMutation,
  useDeleteOneMovieMutation,
  useUpdateOneMovieMutation,
};
