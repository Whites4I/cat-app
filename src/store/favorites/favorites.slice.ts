import { createSlice } from '@reduxjs/toolkit'

// interface I favorites {}

const initialState = {}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		// toggleFavorites: (state, action: PayloadAction<>) => {
		// 	const isExist = state.some(item => item.id === recipe.id)
		// 	if (isExist) {
		// 		const index = state.findIndex(item => item.id === recipe.id)
		// 		if (index !== -1) {
		// 			state.splice(index, 1)
		// 		}
		// 	} else {
		// 		state.push(recipe)
		// 	}
		// },
	},
})

export const { actions, reducer } = favoritesSlice
