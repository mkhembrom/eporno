import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const epornApi = createApi({
    reducerPath: 'epornApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.eporner.com/api/v2/' }),

    endpoints: (builder) => ({
        getEporn: builder.query({
            query: ({ page = 1, query = "teen" }) => `video/search/?query=${query}&per_page=48&page=${page}&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json`,
        }),
        getEpornById: builder.query({
            query: (id) => `video/id/?id=${id}`,
        }),
    }),
})

export const { useGetEpornQuery, useGetEpornByIdQuery } = epornApi