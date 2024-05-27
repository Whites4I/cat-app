import { FC, useContext } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useDivideBlock } from '../../../hooks/useDivideBlock'
import useSearchByBreed from '../../../hooks/useSearchByBreed'
import { SearchContext } from '../../layout/Layout'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import GridCarts from '../../ui/carts/grid-carts/GridCarts'
import InfoBreed from '../../ui/tables/info-breed/InfoBreed'
import InfoPage from '../../ui/tables/info-page/InfoPage'
import styles from './Search.module.scss'

const Search: FC = () => {
	const { dislikes, likes } = useAppSelector(state => state.toggleCat)

	const { breedSearch } = useContext(SearchContext)

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
				<GridCarts data={searchDivide} component={InfoBreed} />
			</div>
		</div>
	)
}

export default Search
