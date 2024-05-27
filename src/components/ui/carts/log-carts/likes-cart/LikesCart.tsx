import { FC } from 'react'
import { dImage } from '../../../../../assets/image/dImage'
import { ILogCart } from '../../../../../shared/types/ILogCart.interface'
import styles from './LikesCart.module.scss'

const LikesCart: FC<ILogCart> = ({ dataLog }) => {
	return (
		<div className={styles.likesCart}>
			<div className={styles.time}>
				<b>{dataLog.time}</b>
			</div>
			<div className={styles.text}>
				Image breed: <b>{dataLog.name}</b> was added to Likes
			</div>
			<div className={styles.emoji}>
				<svg
					width='30'
					height='30'
					viewBox='0 0 30 30'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						className={styles.likesImage}
						fill='#FF868E'
						fillRule='evenodd'
						d={dImage.likes}
						clipRule='evenodd'
					/>
				</svg>
			</div>
		</div>
	)
}

export default LikesCart
