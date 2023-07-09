import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../config";

export const userCoreApi = createApi({
  reducerPath: "userCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.BASE_API,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("o1kypuser");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (payload) => ({
        url: "/user/kyp/register",
        method: "POST",
        body: { ...payload },
      }),
    }),
    userLogin: builder.mutation({
      query: (payload) => ({
        url: "/user/kyp/login",
        method: "POST",
        body: { ...payload },
      }),
    }),
    userDetails: builder.query({ query: () => "/user/" }),
    getCollegeNames: builder.query({
      query: () => "/colleges/",
    }),
    getTestLink: builder.query({
      query: () => "/kyp/test-link",
    }),
    getGraphData: builder.query({
      query: (type) => `/kyp/graphs?subject=${type}`,
    }),
    getRanklist: builder.query({
      query: (type) => `/kyp/ranklist?type=${type}`,
    }),
    userAnalyse: builder.mutation({
      query: (payload) => ({
        url: "/kyp/analyse",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useUserDetailsQuery,
  useGetCollegeNamesQuery,
  useGetTestLinkQuery,
  useGetGraphDataQuery,
  useGetRanklistQuery,
  useUserAnalyseMutation,
} = userCoreApi;
