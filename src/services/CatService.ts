/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY } from '../API/API_KEY'
import { URL } from '../API/URL'
import { ICat } from '../shared/types/ICat.interface'

export const catApi = createApi({
	reducerPath: 'catApi',
	tagTypes: ['Cat'],

	baseQuery: fetchBaseQuery({
		baseUrl: URL,
		prepareHeaders: headers => {
			headers.set('x-api-key', API_KEY)
			headers.set('content-type', 'application/json')
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
			{ idBreed: string | ''; limit: string | '' }
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
		getFilteredCat: builder.query<
			ICat[],
			{
				idBreed: string | ''
				limit: string | ''
				idOrder: string | ''
				idType: string | ''
			}
		>({
			query: ({ idBreed, limit, idOrder, idType }) => {
				let queryParams = 'images/search?has_breeds=1'
				if (limit) {
					queryParams += `&limit=${limit}`
				}
				if (idBreed) {
					queryParams += `&breed_ids=${idBreed}`
				}
				if (idOrder) {
					queryParams += `&order=${idOrder}`
				}
				if (idType) {
					queryParams += `&mime_types=${idType}`
					if (idType === 'gif')
						queryParams = queryParams.replace('has_breeds=1', '')
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
	useLazyGetRandomCatQuery,
	useLazyGetBreedCatQuery,
	useLazyGetFilteredCatQuery,
} = catApi
