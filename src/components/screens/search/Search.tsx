import { FC, useContext } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useDivideBlock } from '../../../hooks/useDivideBlock'
import useSearchByBreed from '../../../hooks/useSearchByBreed'
import { SearchContext } from '../../layout/Layout'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import FavoritesToggleBtn from '../../ui/buttons/favorites-toggle-btn/FavoritesToggleBtn'
import GridCarts from '../../ui/carts/grid-carts/GridCarts'
import Table from '../../ui/tables/tables-back-section/Table'
import styles from './Search.module.scss'

const Search: FC = () => {
	const { favorites, dislikes, likes } = useAppSelector(
		state => state.toggleCat
	)

	const { breedSearch } = useContext(SearchContext)

	const { toggleFavorites } = useAppDispatch()

	const mergedData = dislikes.concat(likes, favorites)
	const searchData = useSearchByBreed(mergedData, breedSearch as string)
	const searchDivide = useDivideBlock(searchData)

	return (
		<div className={styles.search}>
			<div className={styles.backSection}>
				<div className={styles.backBtn}>
					<BackBtn />
				</div>

				<div className={styles.table}>
					<Table content={'SEARCH'} />
				</div>
			</div>

			<div className={styles.cartsSection}>
				<GridCarts
					data={searchDivide}
					dataComponent={favorites}
					toggle={toggleFavorites}
					component={FavoritesToggleBtn}
				/>
			</div>
		</div>
	)
}

export default Search
