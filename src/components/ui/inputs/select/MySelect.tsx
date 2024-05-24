import { ReactElement, useRef, useState } from 'react'
import { IMySelect } from '../../../../shared/types/IMySelect.interface'
import styles from './MySelect.module.scss'

const MySelect = ({
	options,
	placeholder,
	setState,
	style,
	textToOption,
}: IMySelect): ReactElement => {
	const inputRef = useRef<HTMLInputElement>(null)

	const [option, setOption] = useState<string>('')
	const [showAdditionalBlock, setShowAdditionalBlock] = useState(false)

	const handleOptionClick = (option: string) => {
		if (inputRef.current) {
			inputRef.current.blur()
		}
		handleSearch(option)
	}

	const handleInputClick = () => {
		setShowAdditionalBlock(true)
	}

	const handleInputBlur = () => {
		setTimeout(() => {
			setShowAdditionalBlock(false)
		}, 200)
	}

	const handleSearch = (option: string) => {
		setShowAdditionalBlock(false)
		setOption(option)
		setState(option)
	}

	return (
		<div className={styles.sectionContainer}>
			<input
				className={styles.sectionInput}
				ref={inputRef}
				type='button'
				title={placeholder}
				value={
					option ? (textToOption ? textToOption + option : option) : placeholder
				}
				onClick={handleInputClick}
				onBlur={handleInputBlur}
				style={style}
			/>
			{showAdditionalBlock && (
				<div className={styles.blockOptions}>
					<div className={styles.options}>
						<ul>
							{options.map(option => (
								<li key={option} onClick={() => handleOptionClick(option)}>
									{textToOption} {option}
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default MySelect
