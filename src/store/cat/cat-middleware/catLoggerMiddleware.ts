import { Middleware, PayloadAction } from '@reduxjs/toolkit'
import { useGetCurrentTime } from '../../../hooks/useGetCurrentTime.ts'
import { ICat } from '../../../shared/types/ICat.interface.ts'
import { actions } from './catMiddleware.slice.ts'

const isCatAction = (action: any): action is PayloadAction<ICat> => {
	return (
		typeof action === 'object' &&
		action !== null &&
		'payload' in action &&
		'type' in action &&
		action.payload &&
		typeof action.payload.id === 'string'
	)
}

const catLoggerMiddleware: Middleware<object, any> =
	store => next => action => {
		if (isCatAction(action) && action.type.startsWith('catToggle/')) {
			const currentTime = useGetCurrentTime()
			const { id } = action.payload
			const activity = action.type.split('/')[1]

			const logEntry = {
				time: currentTime,
				id,
				activity,
			}

			if (activity === 'toggleFavorites') {
				const isFavorite = store
					.getState()
					.toggleCat.favorites.some((cat: { id: string }) => cat.id === id)
				if (isFavorite) {
					logEntry.activity = 'addedToFavorites'
				} else {
					logEntry.activity = 'removedFromFavorites'
				}
			}

			store.dispatch(actions.addLogEntry(logEntry))
		}

		return next(action)
	}

export default catLoggerMiddleware
