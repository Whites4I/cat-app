import { FC } from 'react'
import Navbar from '../../ui/navbar/Navbar'
import styles from './Likes.module.scss'

const Likes: FC = () => {
	return (
		<div className={styles.likes}>
			<Navbar />
			<div className={styles.likesSection}></div>
		</div>
	)
}

export default Likes
