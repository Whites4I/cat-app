/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY } from '../API/api_key'
import { URL } from '../API/url'
import { EBreed } from '../shared/types/EBreed.enum'
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
			{ breed: EBreed | ''; limit: number | undefined }
		>({
			query: ({ breed, limit }) => {
				let queryParams = 'images/search?'
				if (limit) {
					queryParams += `limit=${limit}&`
				}
				if (breed) {
					queryParams += `breed_ids=${breed}`
				} else {
					queryParams = queryParams.slice(0, -1)
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
