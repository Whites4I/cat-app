import { FC } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector'
import BackBtn from '../../ui/buttons/BackBtn/BackBtn'
import Carts from '../../ui/section-carts/Carts'
import Table from '../../ui/table/Table'
import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const { favorites } = useAppSelector(state => state.toggleCat)

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
				<Carts {...favorites} />
			</div>
		</div>
	)
}

export default Favorites
