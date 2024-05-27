import { FC } from 'react'
import { dImage } from '../../../../../assets/image/dImage'
import { ILogCart } from '../../../../../shared/types/ILogCart.interface'
import styles from './FavoritesCart.module.scss'

const FavoritesCart: FC<ILogCart> = ({ dataLog }) => {
	return (
		<div className={styles.favoritesCart}>
			<div className={styles.time}>
				<b>{dataLog.time}</b>
			</div>
			<div className={styles.text}>
				{dataLog.activity === 'addedToFavorites' ? (
					<div>
						Image breed: <b>{dataLog.name}</b> was added to Favorites
					</div>
				) : (
					<div>
						Image breed: <b>{dataLog.name}</b> was removed from Favorites
					</div>
				)}
			</div>
			<div className={styles.emoji}>
				{dataLog.activity === 'addedToFavorites' && (
					<svg
						width='30'
						height='26'
						viewBox='0 0 30 26'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							className={styles.favoritesImage}
							fillRule='evenodd'
							clipRule='evenodd'
							d={dImage.favorites}
							fill='#FF868E'
						/>
					</svg>
				)}
			</div>
		</div>
	)
}

export default FavoritesCart
