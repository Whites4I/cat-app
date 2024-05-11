import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICat } from '../../shared/types/ICat.interface'
import { ICatData } from '../../shared/types/ICatData.interface'

const initialState: ICatData = {
	likes: [],
	dislikes: [],
	favorites: [],
}

export const catSlice = createSlice({
	name: 'catToggle',
	initialState,
	reducers: {
		toggleDislikes: (state, { payload: cat }: PayloadAction<ICat>) => {
			const { dislikes, likes } = state
			const isDisliked = dislikes.some(item => item.id === cat.id)
			const isLiked = likes.some(item => item.id === cat.id)

			state.dislikes = isDisliked
				? dislikes.filter(item => item.id !== cat.id)
				: [...dislikes, cat]
			if (isLiked) state.likes = likes.filter(item => item.id !== cat.id)
		},

		toggleLikes: (state, { payload: cat }: PayloadAction<ICat>) => {
			const { likes, dislikes } = state
			const isLiked = likes.some(item => item.id === cat.id)
			const isDisliked = dislikes.some(item => item.id === cat.id)

			state.likes = isLiked
				? likes.filter(item => item.id !== cat.id)
				: [...likes, cat]
			if (isDisliked)
				state.dislikes = dislikes.filter(item => item.id !== cat.id)
		},

		toggleFavorites: (state, { payload: cat }: PayloadAction<ICat>) => {
			const { favorites } = state
			const isExist = favorites.some(item => item.id === cat.id)

			state.favorites = isExist
				? favorites.filter(item => item.id !== cat.id)
				: [...favorites, cat]
		},
	},
})

export const { actions, reducer } = catSlice
