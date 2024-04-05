import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as favoritesAction } from '../store/favorites/favorites.slice'

const rootActions = {
	...favoritesAction,
}

export const useAppDispatch = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
