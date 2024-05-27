import { FC } from 'react'
import { dImage } from '../../../../../assets/image/dImage'
import { ILogCart } from '../../../../../shared/types/ILogCart.interface'
import styles from './DislikesCart.module.scss'

const DislikesCart: FC<ILogCart> = ({ dataLog }) => {
	return (
		<div className={styles.dislikesCart}>
			<div className={styles.time}>
				<b>{dataLog.time}</b>
			</div>
			<div className={styles.text}>
				Image breed: <b>{dataLog.name}</b> was added to Dislikes
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
						className={styles.dislikesImage}
						fillRule='evenodd'
						clipRule='evenodd'
						d={dImage.dislikes}
						fill='#FF868E'
					/>
				</svg>
			</div>
		</div>
	)
}

export default DislikesCart
