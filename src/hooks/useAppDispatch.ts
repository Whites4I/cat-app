import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as catAction } from '../store/cat/cat.slice'

const rootActions = {
	...catAction,
}

export const useAppDispatch = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
