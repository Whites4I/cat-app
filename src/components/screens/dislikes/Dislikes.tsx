import { FC } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useDivideBlock } from '../../../hooks/useDivideBlock'
import { ICat } from '../../../shared/types/ICat.interface'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import FavoritesToggleBtn from '../../ui/buttons/favorites-toggle-btn/FavoritesToggleBtn'
import GridCarts from '../../ui/carts/grid-carts/GridCarts'
import Table from '../../ui/tables/tables-back-section/Table'
import styles from './Dislikes.module.scss'

const Dislikes: FC = () => {
	const { dislikes, favorites } = useAppSelector(state => state.toggleCat)
	const { toggleFavorites } = useAppDispatch()
	const dislikesDivide = useDivideBlock<ICat>(dislikes)

	return (
		<div className={styles.dislikes}>
			<div className={styles.backSection}>
				<div className={styles.backBtn}>
					<BackBtn />
				</div>

				<div className={styles.table}>
					<Table content={'DISLIKES'} />
				</div>
			</div>

			<div className={styles.cartsSection}>
				<GridCarts
					data={dislikesDivide}
					dataFavorite={favorites}
					toggle={toggleFavorites}
					component={FavoritesToggleBtn}
				/>
			</div>
		</div>
	)
}

export default Dislikes
