import Home from '../components/screens/home/Home'
import Likes from '../components/screens/likes/Likes'
import Voting from '../components/screens/voting/Voting'

export const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/voting', element: <Voting /> },
	{ path: '/likes', element: <Likes /> },
]
// { path: '/gallery', element: <Gallery /> },
// { path: '/breeds', element: <Breeds /> },
// { path: '/favorites', element: <Favorites /> },
// { path: '/dislikes', element: <Dislikes /> },
