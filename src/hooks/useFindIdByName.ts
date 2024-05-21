import { IBreed } from '../shared/types/IBreed.interface'

export const useFindIdByName = (
	nameToFind: string,
	breedsArray: IBreed[]
): string => {
	const foundBreed = breedsArray.find(breed => breed.name === nameToFind)
	return foundBreed ? foundBreed.id : ''
}
