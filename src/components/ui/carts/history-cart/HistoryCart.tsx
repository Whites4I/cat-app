import { FC } from 'react'
import { ICatLog } from '../../../../shared/types/ICatLog.interface'
import styles from './HistoryCart.module.scss'
// {dataLog.map(log => {
// 	switch (log.activity) {
// 		case value:
// 			break

// 		default:
// 			break
// 	}

const HistoryCart: FC<ICatLog[]> = dataLog => {
	return (
		<>
			<div className={styles.historyCart}>
				<div className={styles.time}></div>
				<div className={styles.text}>
					No item found <span></span>
				</div>
				<div className={styles.type}></div>
				<div className={styles.typeEmoji}></div>
			</div>
		</>
	)
}

export default HistoryCart
