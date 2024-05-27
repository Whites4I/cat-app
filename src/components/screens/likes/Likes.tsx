import { FC } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useDivideBlock } from '../../../hooks/useDivideBlock'
import { ICat } from '../../../shared/types/ICat.interface'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import FavoritesToggleBtn from '../../ui/buttons/favorites-toggle-btn/FavoritesToggleBtn'
import GridCarts from '../../ui/carts/grid-carts/GridCarts'
import InfoPage from '../../ui/tables/info-page/InfoPage'
import styles from './Likes.module.scss'

const Likes: FC = () => {
	const { favorites, likes } = useAppSelector(state => state.toggleCat)
	const { toggleFavorites } = useAppDispatch()
	const likesBlock = useDivideBlock<ICat>(likes)

	return (
		<div className={styles.likes}>
			<div className={styles.backSection}>
				<div className={styles.backBtn}>
					<BackBtn />
				</div>

				<div className={styles.table}>
					<InfoPage content={'LIKES'} />
				</div>
			</div>

			<div className={styles.cartsSection}>
				{likesBlock && (
					<GridCarts
						data={likesBlock}
						dataComponent={favorites}
						toggle={toggleFavorites}
						component={FavoritesToggleBtn}
					/>
				)}
			</div>
		</div>
	)
}

export default Likes
