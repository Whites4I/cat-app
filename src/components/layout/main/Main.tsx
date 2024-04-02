import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../ui/navbar/Navbar'
import styles from './Main.module.scss'

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
