import { FC } from 'react'
import styles from './Loader.module.scss'

const Loader: FC = () => {
	return (
		<div className={styles.loader}>
			<img src='/loader.svg' title='Loading...'></img>
		</div>
	)
}

export default Loader
