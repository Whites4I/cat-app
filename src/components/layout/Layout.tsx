import { FC, createContext, useState } from 'react'
import { ISearchContext } from '../../shared/types/ISearchContext.interface'
import styles from './Layout.module.scss'
import Main from './main/Main'
import Sidebar from './sidebar/Sidebar'

export const SearchContext = createContext<Partial<ISearchContext>>({})

const Layout: FC = () => {
	const [breedSearch, setBreedSearch] = useState<string>('')

	const changeBreed = (breed: string) => {
		setBreedSearch(breed)
	}

	return (
		<SearchContext.Provider value={{ breedSearch, changeBreed }}>
			<div className={styles.layout}>
				<Sidebar />
				<Main />
			</div>
		</SearchContext.Provider>
	)
}

export default Layout
