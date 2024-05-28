export interface IMySelect {
	options: any[]
	title?: string
	firstOption?: string
	firstValue?: string
	placeholder: string
	textToOption?: string
	style?: React.CSSProperties | undefined
	setState: React.Dispatch<React.SetStateAction<any>>
}
