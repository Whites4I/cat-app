import { FC } from 'react'
import styles from './Search.module.scss'

const Search: FC = () => {
	return (
		<div className={styles.search}>
			<input
				className={styles.searchInput}
				type='text'
				placeholder='Search for breeds by name'
			></input>
			<button
				className={styles.searchBtn}
				type='button'
				title='search'
			></button>
		</div>
	)
}

export default Search
