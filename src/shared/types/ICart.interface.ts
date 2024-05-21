import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { FC } from 'react'
import { ICat } from './ICat.interface'
import { IToggleBtn } from './IToggleBtn'

export interface ICart {
	cat: ICat
	dataArr?: ICat[]
	indexCat: number
	toggle?: ActionCreatorWithPayload<ICat>
	component?: FC<IToggleBtn> | any
}
