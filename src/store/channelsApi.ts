import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Channel {
  id: number;
  name: string;
  messages: string[];
}

const baseUrl = "http://localhost:5500";

export const channelsApi = createApi({
  reducerPath: "channelsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Message"],
  endpoints: (builder) => ({
    getAllChannels: builder.query<Channel[], void>({
      query: () => "/channels",
    }),
    getMessagesByChannel: builder.query<string[], number>({
      query: (id) => `/messages/${id}`,
      providesTags: ["Message"],
    }),
    addMessage: builder.mutation({
      query: ({ message, id }) => ({
        url: `/${id}`,
        method: "POST",
        body: { message },
      }),
      invalidatesTags: ["Message"],
    }),
  }),
});

export const { useGetAllChannelsQuery, useGetMessagesByChannelQuery, useAddMessageMutation } =
  channelsApi;
