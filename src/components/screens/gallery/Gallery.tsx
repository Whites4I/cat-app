import { FC } from 'react'
import Loader from '../../ui/loader/Loader'
import styles from './Gallery.module.scss'

const Gallery: FC = () => {
	return (
		<div className={styles.gallery}>
			Gallery
			<Loader />
		</div>
	)
}

export default Gallery
