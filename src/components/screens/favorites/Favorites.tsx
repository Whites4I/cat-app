import { FC } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useDivideBlock } from '../../../hooks/useDivideBlock'
import { ICat } from '../../../shared/types/ICat.interface'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import FavoritesToggleBtn from '../../ui/buttons/favorites-toggle-btn/FavoritesToggleBtn'
import GridCarts from '../../ui/carts/grid-carts/GridCarts'
import InfoPage from '../../ui/tables/info-page/InfoPage'
import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const { favorites } = useAppSelector(state => state.toggleCat)
	const { toggleFavorites } = useAppDispatch()
	const favoritesBlock = useDivideBlock<ICat>(favorites)

	return (
		<div className={styles.favorites}>
			<div className={styles.backSection}>
				<div className={styles.backBtn}>
					<BackBtn />
				</div>

				<div className={styles.table}>
					<InfoPage content={'FAVORITES'} />
				</div>
			</div>

			<div className={styles.cartsSection}>
				{favoritesBlock && (
					<GridCarts
						data={favoritesBlock}
						dataComponent={favorites}
						toggle={toggleFavorites}
						component={FavoritesToggleBtn}
					/>
				)}
			</div>
		</div>
	)
}

export default Favorites
