import { FC } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector'
import BackBtn from '../../ui/buttons/BackBtn/BackBtn'
import Carts from '../../ui/section-carts/Carts'
import Table from '../../ui/table/Table'
import styles from './Dislikes.module.scss'

const Dislikes: FC = () => {
	const { dislikes } = useAppSelector(state => state.toggleCat)

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
				<Carts {...dislikes} />
			</div>
		</div>
	)
}

export default Dislikes
