import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as dislikesAction } from '../store/dislikes/dislikes.slice'
import { actions as favoritesAction } from '../store/favorites/favorites.slice'
import { actions as likesAction } from '../store/likes/likes.slice'

const rootActions = {
	...favoritesAction,
	...dislikesAction,
	...likesAction,
}

export const useAppDispatch = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
