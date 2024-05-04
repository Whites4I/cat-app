import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICat } from '../../shared/types/ICat.interface'
import { ICatData } from '../../shared/types/ICatData.interface'

const initialState: ICatData = {
	likes: [],
	dislikes: [],
	favorites: [],
}

export const catSlice = createSlice({
	name: 'cat',
	initialState,
	reducers: {
		toggleDislikes: (
			{ dislikes, likes },
			{ payload: cat }: PayloadAction<ICat>
		) => {
			const isDisliked = dislikes.some(item => item.id === cat.id)
			const isLiked = likes.some(item => item.id === cat.id)

			if (isDisliked) {
				dislikes = dislikes.filter(item => item.id !== cat.id)
			} else {
				dislikes.push(cat)
			}

			if (isLiked) {
				likes = likes.filter(item => item.id !== cat.id)
			}
		},

		toggleLikes: (
			{ likes, dislikes },
			{ payload: cat }: PayloadAction<ICat>
		) => {
			const isLiked = likes.some(item => item.id === cat.id)
			const isDisliked = dislikes.some(item => item.id === cat.id)

			if (isLiked) {
				likes = likes.filter(item => item.id !== cat.id)
			} else {
				likes.push(cat)
			}

			if (isDisliked) {
				dislikes = dislikes.filter(item => item.id !== cat.id)
			}
		},

		toggleFavorites: ({ favorites }, { payload: cat }: PayloadAction<ICat>) => {
			const isExist = favorites.some(item => item.id === cat.id)

			if (isExist) {
				favorites = favorites.filter(item => item.id !== cat.id)
			} else {
				favorites.push(cat)
			}
		},
	},
})

export const { actions, reducer } = catSlice
