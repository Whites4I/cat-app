import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICat } from '../../shared/types/index.interface'

const initialState: ICat[] = []

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, { payload: cat }: PayloadAction<ICat>) => {
			const isExist = state.some(item => item.id === cat.id)
			if (isExist) {
				const index = state.findIndex(item => item.id === cat.id)

				if (index !== -1) {
					state.splice(index, 1)
				}
			} else {
				state.push(cat)
			}
		},
	},
})

export const { actions, reducer } = favoritesSlice
