import { IMoviesData } from "@/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const DataAPI = createApi({
  reducerPath: "DataAPI",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BACKEND_API }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getAllMovies: builder.query<IMoviesData[], void>({
      query: () => `/movies`,
      providesTags: ["Movies"],
    }),
    postOneMovie: builder.mutation<IMoviesData, Partial<IMoviesData>>({
      query: (body) => ({
        url: `/movies`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Movies"],
    }),
    deleteOneMovie: builder.mutation<IMoviesData, Pick<IMoviesData, "_id">>({
      query: ({ _id }) => ({
        url: `/movies/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Movies"],
    }),
    updateOneMovie: builder.mutation<IMoviesData, IMoviesData>({
      query: ({ _id, ...body }) => ({
        url: `/movies/${_id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Movies"],
    }),
    getOneMovieById: builder.query<IMoviesData, Pick<IMoviesData, "_id">>({
      query: ({ _id }) => `/movies/${_id}`,
      providesTags: ["Movies"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllMoviesQuery,
  useGetOneMovieByIdQuery,
  usePostOneMovieMutation,
  useDeleteOneMovieMutation,
  useUpdateOneMovieMutation,
} = DataAPI;
