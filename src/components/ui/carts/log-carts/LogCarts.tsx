import { FC } from 'react'
import { ICatLog } from '../../../../shared/types/ICatLog.interface'
import styles from './LogCarts.module.scss'
import DislikesCart from './dislikes-cart/DislikesCart'
import FavoritesCart from './favorites-cart/FavoritesCart'
import LikesCart from './likes-cart/LikesCart'

interface IHistoryCart {
	dataLog: ICatLog[]
}
const LogCarts: FC<IHistoryCart> = ({ dataLog }) => {
	return (
		<div className={styles.logCarts}>
			{dataLog.map((log, index) => {
				if (log.activity === 'toggleLikes') {
					return <LikesCart key={index} dataLog={log} />
				} else if (log.activity === 'toggleDislikes') {
					return <DislikesCart key={index} dataLog={log} />
				} else {
					return <FavoritesCart key={index} dataLog={log} />
				}
			})}
		</div>
	)
}

export default LogCarts
