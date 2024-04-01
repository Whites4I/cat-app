import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AppRouter from './router/AppRouter'

const App: FC = () => {
	return (
		<BrowserRouter>
			<div className='container'>
				<Layout />
				<AppRouter />
			</div>
		</BrowserRouter>
	)
}

export default App
