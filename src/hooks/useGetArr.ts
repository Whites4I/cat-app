export const useGetArr = (data: object): any[] => {
	return Object.values(data)
}

export const useGetArrG = <T extends []>(data: T): T[] => {
	return Object.values(data)
}
