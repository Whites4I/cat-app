import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Main.module.scss'
import Navbar from './navbar/Navbar'

const Main: FC = () => {
	return (
		<div className={styles.main}>
			<Navbar />
			<div id='detail'>
				<Outlet />
			</div>
		</div>
	)
}

export default Main
