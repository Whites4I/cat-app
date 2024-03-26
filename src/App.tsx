import { BrowserRouter } from 'react-router-dom'
import styles from './App.module.scss'
import Layout from './components/layout/Layout'
import AppRouter from './router/AppRouter'

const App = () => {
	return (
		<BrowserRouter>
			<div className={styles.container}>
				<Layout />
				<AppRouter />
			</div>
		</BrowserRouter>
	)
}

export default App
