import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY } from '../API/api_key'
import { URL } from '../API/url'
import { ICat } from '../shared/types/index.interface'

export const catApi = createApi({
	reducerPath: 'catApi',

	tagTypes: ['Cat'],

	baseQuery: fetchBaseQuery({
		baseUrl: URL,
		headers: { 'x-api-key': API_KEY },
	}),

	endpoints: builder => ({
		getRandomCat: builder.query<ICat[] | undefined, null>({
			query: () => `images/search`,
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Cat' as const, id })),
							{ type: 'Cat', id: 'LIST' },
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  ]
					: [{ type: 'Cat', id: 'LIST' }],
		}),
	}),
})

export const { useGetRandomCatQuery } = catApi
