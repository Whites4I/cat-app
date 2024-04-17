import { FC } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useDivideBlock } from '../../../hooks/useDivideBlock'
import { ICat } from '../../../shared/types/ICat.interface'
import BackBtn from '../../ui/buttons/BackBtn/BackBtn'
import GridCarts from '../../ui/carts/GridCarts'
import Table from '../../ui/table/Table'
import styles from './Likes.module.scss'

const Likes: FC = () => {
	const { likes } = useAppSelector(state => state.toggleCat)
	const likesBlock = useDivideBlock<ICat>(likes)

	return (
		<div className={styles.likes}>
			<div className={styles.backSection}>
				<div className={styles.backBtn}>
					<BackBtn />
				</div>

				<div className={styles.table}>
					<Table content={'LIKES'} />
				</div>
			</div>

			<div className={styles.cartsSection}>
				<GridCarts {...likesBlock} />
			</div>
		</div>
	)
}

export default Likes
