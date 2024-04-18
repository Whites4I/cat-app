import { FC } from 'react'
import { dImage } from '../../../../assets/image/dImage'
import { IToggleBtn } from '../../../../shared/types/IToggleBtn'
import styles from './FavoritesToggleBtn.module.scss'

const FavoritesToggleBtn: FC<IToggleBtn> = ({ toggle, dataArr, cat }) => {
	return (
		<div className={styles.blockBtn}>
			<button
				className={styles.btn}
				type='button'
				title='Meow'
				onClick={() => {
					toggle(cat)
				}}
			>
				<svg
					width='20'
					height='17'
					viewBox='0 0 30 26'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					{dataArr?.some(item => item.id === cat.id) ? (
						<path
							className={styles.btnImage}
							d={dImage.favoritesFilled}
							fill='#ffffff'
						/>
					) : (
						<path
							className={styles.btnImage}
							fillRule='evenodd'
							clipRule='evenodd'
							d={dImage.favorites}
							fill='#FF868E'
						/>
					)}
				</svg>
			</button>
		</div>
	)
}

export default FavoritesToggleBtn
