import { ICat } from '../shared/types/ICat.interface'

const useArrayFilter = (array: ICat[], value: string | undefined): ICat[] => {
	const filteredMergedData: ICat[] = array.reduce((acc: ICat[], curr) => {
		const isExist = acc.some(item => item.id === curr.id)

		if (!isExist) {
			acc.push(curr)
		}

		return acc
	}, [])

	const filteredArray = filteredMergedData.filter(item => {
		item.breeds?.name === value
	})

	return filteredArray
}

export default useArrayFilter
