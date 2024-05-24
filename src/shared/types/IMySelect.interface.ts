export interface IMySelect {
	options: any[]
	firstOption?: string
	firstValue?: string
	placeholder: string
	textToOption?: string
	style?: React.CSSProperties | undefined
	setState: React.Dispatch<React.SetStateAction<any>>
}
