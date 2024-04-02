import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './ErrorBoundary.module.scss'

const ErrorBoundary: FC = () => {
	return (
		<div className={styles.ErrorBoundary}>
			<h1 className={styles.errorText}> ERROR 404 "Page not found"</h1>
			<div>
				<Link to={'/'}>Go home</Link>
			</div>
		</div>
	)
}

export default ErrorBoundary
