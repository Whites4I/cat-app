import { FC, PropsWithChildren } from 'react'
import styles from './Table.module.scss'

interface IContent {
	content: string
}

const Table: FC<PropsWithChildren<IContent>> = ({ content }) => {
	return <div className={styles.table}>{content}</div>
}

export default Table
