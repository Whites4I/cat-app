import { FC } from 'react'
import styles from './Loader.module.scss'

const Loader: FC = () => {
	return (
		<img className={styles.loader} src='/loader.svg' title='Loading...'></img>
	)
}

export default Loader
