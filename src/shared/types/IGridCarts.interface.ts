import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { FC } from 'react'
import { ICat } from './ICat.interface'
import { IToggleBtn } from './IToggleBtn'

export interface IGridCarts {
	data: ICat[][]
	dataComponent?: ICat[]
	toggle?: ActionCreatorWithPayload<ICat>
	component?: FC<IToggleBtn> | any
}
