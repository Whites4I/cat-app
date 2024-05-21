import { ReactElement } from 'react'
import { IMySelect } from '../../../../shared/types/IMySelect.interface'
import styles from './MySelect.module.scss'

const MySelect = ({
	options,
	firstOption,
	firstValue,
	title,
	setState,
}: IMySelect): ReactElement => {
	return (
		<select
			className={styles.mySelect}
			title={title}
			onChange={e => setState(e.target.value)}
		>
			{firstOption && (
				<option className={styles.myOption} value={firstValue}>
					{firstOption}
				</option>
			)}
			{options.map((option, index) => (
				<option className={styles.myOption} key={index} value={option}>
					{option}
				</option>
			))}
		</select>
	)
}

export default MySelect
