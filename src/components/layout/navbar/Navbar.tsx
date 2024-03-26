import { FC } from 'react'
import styles from './Navbar.module.scss'

const Navbar: FC = () => {
	return (
		<div className={styles.navbar}>
			<img alt='girl-and-pet' src='/girl-and-pet.svg'></img>
		</div>
	)
}

export default Navbar
