import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL } from '../api/url'

interface ICat {
	categories?: []
	breeds?: []
	id: string
	url: string
	width: number
	height: number
}

const API_key =
	'live_yKEoz07z9GKTqn22fH4zflgr8MedVdFEKeqfxSraDwvmQSrxCCiJzYi1nQI7RKzY'

export const catApi = createApi({
	reducerPath: 'catApi',
	baseQuery: fetchBaseQuery({
		baseUrl: URL,
		headers: { 'x-api-key': API_key },
	}),
	endpoints: builder => ({
		getRandomCat: builder.query<ICat[], string>({
			query: name => `${name}`,
		}),
	}),
})

export const { useGetRandomCatQuery } = catApi
