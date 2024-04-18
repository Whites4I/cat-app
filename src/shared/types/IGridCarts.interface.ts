import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { FC } from 'react'
import { ICat } from './ICat.interface'
import { IToggleBtn } from './IToggleBtn'

export interface IGridCarts {
	data: ICat[][]
	dataFavorite: ICat[]
	toggle: ActionCreatorWithPayload<ICat>
	component: FC<IToggleBtn> | any
}
