import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICatLog, ICatLogArr } from '../../../shared/types/ICatLog.interface'

const initialState: ICatLogArr = {
	entries: [],
}

const logSlice = createSlice({
	name: 'logCat',
	initialState,
	reducers: {
		addLogEntry: (state, action: PayloadAction<ICatLog>) => {
			state.entries.push(action.payload)
		},
	},
})

export const { actions, reducer } = logSlice
