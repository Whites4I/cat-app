import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<div className={styles.logo}>
			<Link to={'/'}>
				<img alt='Logo' src='/logo.svg'></img>
			</Link>
		</div>
	)
}

export default Logo
