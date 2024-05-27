import { IBreed } from './IBreed.interface'

export interface ICat {
	categories?: []
	breeds: IBreed[]
	id: string
	url: string
	width?: number
	height?: number
}
