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
    getOneMovieById: builder.query<IMoviesData, Pick<IMoviesData, "_id">>({
      query: ({ _id }) => `/movies/${_id}`,
      providesTags: ["Movies"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllMoviesQuery, useGetOneMovieByIdQuery } = DataAPI;
