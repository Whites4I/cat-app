import { ICat } from '../shared/types/ICat.interface'

export const useGetObj = (data: any[] | undefined): object | undefined => {
	return data?.find(item => {
		return item.url
	})
}

export const useGetObjG = <T extends ICat>(
	data: T[] | undefined
): T | undefined => {
	return data?.find(item => {
		return item.url
	})
}
