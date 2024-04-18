import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { ICart } from './ICart.interface'
import { ICat } from './ICat.interface'

export interface IToggleBtn extends Omit<ICart, 'indexCat, toggle, component'> {
	toggle: ActionCreatorWithPayload<ICat>
}
