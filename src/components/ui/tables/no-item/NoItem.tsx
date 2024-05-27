import { FC } from 'react'
import styles from './NoItem.module.scss'

interface INoItem {
	text: string
}

const NoItem: FC<INoItem> = ({ text }) => {
	return <div className={styles.noItem}>{text}</div>
}

export default NoItem
