import { ICat } from '../shared/types/ICat.interface'

const findCatsByBreed = (array: ICat[], breedName: string): ICat[] => {
	return array.filter(cat => {
		return (
			cat.breeds &&
			cat.breeds.some((breed: { name: string }) =>
				breed.name.toLowerCase().includes(breedName.toLowerCase())
			)
		)
	})
}

const useSearchByBreed = (array: ICat[], breed?: string): ICat[] => {
	let filteredMergedData: ICat[] = array.reduce((acc: ICat[], curr) => {
		const isExist = acc.some(item => item.id === curr.id)

		if (!isExist) {
			acc.push(curr)
		}

		return acc
	}, [])

	if (breed) {
		filteredMergedData = findCatsByBreed(filteredMergedData, breed)
	}

	return filteredMergedData
}

export default useSearchByBreed
