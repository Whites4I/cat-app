import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { catApi } from '../services/CatService'
// import { reducer as favoritesReducer } from './favorites/favorites.slice.js'

const reducers = combineReducers({
	[catApi.reducerPath]: catApi.reducer,
})

export const store = configureStore({
	reducer: reducers,

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(catApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
