import { FC } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector'
import BackBtn from '../../ui/buttons/BackBtn/BackBtn'
import Carts from '../../ui/section-carts/Carts'
import Table from '../../ui/table/Table'
import styles from './Likes.module.scss'

const Likes: FC = () => {
	const likes = useAppSelector(state => state.likes)

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
				<Carts {...likes} />
			</div>
		</div>
	)
}

export default Likes
