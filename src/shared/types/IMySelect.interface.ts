export interface IMySelect {
	options: any[]
	firstOption?: string
	firstValue?: '1' | '0' | 'RAND' | '' | '5'
	title: string
	setState: React.Dispatch<React.SetStateAction<any>>
}
