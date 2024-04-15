import { FC } from 'react'
import styles from './HistoryCart.module.scss'

const HistoryCart: FC = () => {
	return (
		<div className={styles.historyCart}>
			<div className={styles.time}></div>
			<div className={styles.text}>
				No item found <span></span>
			</div>
			<div className={styles.type}></div>
			<div className={styles.typeEmoji}></div>
		</div>
	)
}

export default HistoryCart
