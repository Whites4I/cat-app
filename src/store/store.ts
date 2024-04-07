import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { catApi } from '../services/CatService'
import { reducer as dislikesReducer } from './dislikes/dislikes.slice.js'
import { reducer as favoritesReducer } from './favorites/favorites.slice.js'
import { reducer as likesReducer } from './likes/likes.slice.js'

const reducers = combineReducers({
	[catApi.reducerPath]: catApi.reducer,
	favorites: favoritesReducer,
	likes: likesReducer,
	dislikes: dislikesReducer,
})

export const store = configureStore({
	reducer: reducers,

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(catApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
