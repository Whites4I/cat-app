import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICat } from '../../shared/types/ICat.interface'

interface ILikeCat {
	likes: ICat[]
	dislikes: ICat[]
	favorites: ICat[]
}

const initialState: ILikeCat = { likes: [], dislikes: [], favorites: [] }

export const catSlice = createSlice({
	name: 'toggleCat',
	initialState,
	reducers: {
		toggleDislikes: (
			{ dislikes, likes },
			{ payload: cat }: PayloadAction<ICat>
		) => {
			const isDisliked = dislikes.some(item => item.id === cat.id)
			const isLiked = likes.some(item => item.id === cat.id)

			if (isDisliked) {
				const index = dislikes.findIndex(item => item.id === cat.id)
				if (index !== -1) {
					dislikes.splice(index, 1)
				}
			} else {
				dislikes.push(cat)
			}

			if (isLiked) {
				const index = likes.findIndex(item => item.id === cat.id)
				if (index !== -1) {
					likes.splice(index, 1)
				}
			}
		},

		toggleFavorites: ({ favorites }, { payload: cat }: PayloadAction<ICat>) => {
			const isExist = favorites.some(item => item.id === cat.id)
			if (isExist) {
				const index = favorites.findIndex(item => item.id === cat.id)

				if (index !== -1) {
					favorites.splice(index, 1)
				}
			} else {
				favorites.push(cat)
			}
		},

		toggleLikes: (
			{ likes, dislikes },
			{ payload: cat }: PayloadAction<ICat>
		) => {
			const isLiked = likes.some(item => item.id === cat.id)
			const isDisliked = likes.some(item => item.id === cat.id)
			if (isLiked) {
				const index = likes.findIndex(item => item.id === cat.id)

				if (index !== -1) {
					likes.splice(index, 1)
				}
			} else {
				likes.push(cat)
			}

			if (isDisliked) {
				const index = dislikes.findIndex(item => item.id === cat.id)
				if (index !== -1) {
					dislikes.splice(index, 1)
				}
			}
		},
	},
})

export const { actions, reducer } = catSlice
