import { FC } from 'react'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import Table from '../../ui/tables/tables-back-section/Table'
import styles from './Search.module.scss'

const Search: FC = () => {
	return (
		<div className={styles.search}>
			<div className={styles.backSection}>
				<div className={styles.backBtn}>
					<BackBtn />
				</div>

				<div className={styles.table}>
					<Table content={'SEARCH'} />
				</div>
			</div>

			<div className={styles.cartsSection}></div>
		</div>
	)
}

export default Search
