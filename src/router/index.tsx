import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Breeds from '../components/screens/breeds/Breeds'
import Dislikes from '../components/screens/dislikes/Dislikes'
import ErrorBoundary from '../components/screens/errorPage/ErrorBoundary'
import Favorites from '../components/screens/favorites/Favorites'
import Gallery from '../components/screens/gallery/Gallery'
import Home from '../components/screens/home/Home'
import Likes from '../components/screens/likes/Likes'
import Voting from '../components/screens/voting/Voting'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorBoundary />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/voting', element: <Voting /> },
			{ path: '/likes', element: <Likes /> },
			{ path: '/gallery', element: <Gallery /> },
			{ path: '/breeds', element: <Breeds /> },
			{ path: '/favorites', element: <Favorites /> },
			{ path: '/dislikes', element: <Dislikes /> },
		],
	},
])
