import styles from './Layout.module.scss'
import Sidebar from './sidebar/Sidebar'

const Layout = () => {
	return (
		<div className={styles.layout}>
			<Sidebar />
		</div>
	)
}

export default Layout
