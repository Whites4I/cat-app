import { FC } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useDivideBlock } from '../../../hooks/useDivideBlock'
import { ICat } from '../../../shared/types/ICat.interface'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import GridCarts from '../../ui/grid-carts/GridCarts'
import Table from '../../ui/table/Table'
import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const { favorites } = useAppSelector(state => state.toggleCat)

	const favoritesBlock = useDivideBlock<ICat>(favorites)

	return (
		<div className={styles.favorites}>
			<div className={styles.backSection}>
				<div className={styles.backBtn}>
					<BackBtn />
				</div>

				<div className={styles.table}>
					<Table content={'FAVORITES'} />
				</div>
			</div>

			<div className={styles.cartsSection}>
				<GridCarts {...favoritesBlock} />
			</div>
		</div>
	)
}

export default Favorites
