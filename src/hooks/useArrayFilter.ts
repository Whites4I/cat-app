import { ICat } from '../shared/types/ICat.interface'

const findCatsByBreed = (array: ICat[], breedName: string): ICat[] => {
	return array.filter(cat => {
		return (
			cat.breeds &&
			cat.breeds.some((breed: { name: string }) => breed.name === breedName)
		)
	})
}

const useArrayFilter = (array: ICat[], breed: string): ICat[] => {
	const filteredMergedData: ICat[] = array.reduce((acc: ICat[], curr) => {
		const isExist = acc.some(item => item.id === curr.id)

		if (!isExist) {
			acc.push(curr)
		}

		return acc
	}, [])

	return findCatsByBreed(filteredMergedData, breed)
}

export default useArrayFilter
