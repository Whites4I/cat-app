import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { catApi } from '../services/CatService'
import catLoggerMiddleware from './cat/cat-middleware/catLoggerMiddleware'
import { reducer as logCatReducer } from './cat/cat-middleware/catMiddleware.slice'
import { reducer as catReducer } from './cat/cat.slice'

const reducers = combineReducers({
	[catApi.reducerPath]: catApi.reducer,
	toggleCat: catReducer,
	logCat: logCatReducer,
})

export const store = configureStore({
	reducer: reducers,

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(catApi.middleware, catLoggerMiddleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
