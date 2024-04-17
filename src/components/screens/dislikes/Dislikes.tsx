import { FC } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useDivideBlock } from '../../../hooks/useDivideBlock'
import { ICat } from '../../../shared/types/ICat.interface'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import GridCarts from '../../ui/grid-carts/GridCarts'
import Table from '../../ui/table/Table'
import styles from './Dislikes.module.scss'

const Dislikes: FC = () => {
	const { dislikes } = useAppSelector(state => state.toggleCat)

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
				<GridCarts {...dislikesDivide} />
			</div>
		</div>
	)
}

export default Dislikes
