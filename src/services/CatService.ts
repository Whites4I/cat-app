/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY } from '../API/api_key'
import { URL } from '../API/url'
import { ICat } from '../shared/types/ICat.interface'

export const catApi = createApi({
	reducerPath: 'catApi',
	tagTypes: ['Cat'],

	baseQuery: fetchBaseQuery({
		baseUrl: URL,
		prepareHeaders: headers => {
			headers.set('x-api-key', API_KEY)
			return headers
		},
	}),

	endpoints: builder => ({
		getRandomCat: builder.query<ICat[] | undefined, null>({
			query: () => `images/search?has_breeds=1`,
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Cat' as const, id })),
							{ type: 'Cat', id: 'LIST' },
					  ]
					: [{ type: 'Cat', id: 'LIST' }],
		}),

		getBreedCat: builder.query<
			ICat[],
			{ idBreed: string | ''; limit: number | undefined }
		>({
			query: ({ idBreed, limit }) => {
				let queryParams = 'images/search?has_breeds=1'
				if (limit) {
					queryParams += `&limit=${limit}`
				}
				if (idBreed) {
					queryParams += `&breed_ids=${idBreed}`
				}
				return queryParams
			},
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Cat' as const, id })),
							{ type: 'Cat', id: 'LIST' },
					  ]
					: [{ type: 'Cat', id: 'LIST' }],
		}),
	}),
})

export const {
	useGetRandomCatQuery,
	useLazyGetRandomCatQuery,
	useGetBreedCatQuery,
	useLazyGetBreedCatQuery,
} = catApi
