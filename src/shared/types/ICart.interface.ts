import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { FC } from 'react'
import { ICat } from './ICat.interface'
import { IToggleBtn } from './IToggleBtn'

export interface ICart {
	cat: ICat
	dataArr: ICat[] | null
	indexCat: number
	toggle: ActionCreatorWithPayload<ICat> | null
	component: FC<IToggleBtn> | any
}
