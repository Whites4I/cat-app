import { FC, useContext } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useDivideBlock } from '../../../hooks/useDivideBlock'
import useSearchByBreed from '../../../hooks/useSearchByBreed'
import { SearchContext } from '../../layout/Layout'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import FavoritesToggleBtn from '../../ui/buttons/favorites-toggle-btn/FavoritesToggleBtn'
import GridCarts from '../../ui/carts/grid-carts/GridCarts'
import InfoPage from '../../ui/tables/info-page/InfoPage'
import styles from './Search.module.scss'

const Search: FC = () => {
	const { favorites, dislikes, likes } = useAppSelector(
		state => state.toggleCat
	)

	const { breedSearch } = useContext(SearchContext)

	const { toggleFavorites } = useAppDispatch()

	const mergedData = dislikes.concat(likes)
	const searchData = useSearchByBreed(mergedData, breedSearch as string)
	const searchDivide = useDivideBlock(searchData)

	return (
		<div className={styles.search}>
			<div className={styles.backSection}>
				<div className={styles.backBtn}>
					<BackBtn />
				</div>

				<div className={styles.table}>
					<InfoPage content={'SEARCH'} />
				</div>
			</div>

			<div className={styles.searchFor}>
				Search results for:
				<span className={styles.searchForBreed}> {breedSearch}</span>
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
