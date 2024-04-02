import { FC } from 'react'
import styles from './Layout.module.scss'
import Main from './main/Main'
import Sidebar from './sidebar/Sidebar'

const Layout: FC = () => {
	return (
		<div className={styles.layout}>
			<Sidebar />
			<Main />
		</div>
	)
}

export default Layout
