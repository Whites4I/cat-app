import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { ICat } from './ICat.interface'

export interface ICart {
	cat: ICat
	dataArr?: ICat[]
	indexCat: number
	toggle?: ActionCreatorWithPayload<ICat>
	component?: any
}
