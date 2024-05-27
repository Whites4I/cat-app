export interface ICatLog {
	time: string
	id: string
	activity: string
}

export interface ICatLogArr {
	entries: ICatLog[]
}
