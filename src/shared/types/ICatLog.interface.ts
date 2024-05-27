export interface ICatLog {
	time: string
	id: string
	activity: string
	name: string
}

export interface ICatLogArr {
	entries: ICatLog[]
}
