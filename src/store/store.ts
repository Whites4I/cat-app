import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { catApi } from '../services/CatService'
import { reducer as catReducer } from './cat/cat.slice'

const reducers = combineReducers({
	[catApi.reducerPath]: catApi.reducer,
	toggleCat: catReducer,
})

export const store = configureStore({
	reducer: reducers,

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(catApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
