import { FC } from 'react'
import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<div className={styles.navbar}>
			<img alt='girl-and-pet' src='/girl-and-pet.svg'></img>
		</div>
	)
}

export default Home
