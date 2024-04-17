import { FC } from 'react'
import { Link } from 'react-router-dom'
import { dImage } from '../../../../assets/image/dImage'
import styles from './BackBtn.module.scss'

const BackBtn: FC = () => {
	return (
		<Link className={styles.back} to={-1 as any}>
			<button className={styles.backBtn} type='button' title='Back'>
				<svg
					width='12'
					height='20'
					viewBox='0 0 12 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path className={styles.backImage} d={dImage.back} fill='#FF868E' />
				</svg>
			</button>
		</Link>
	)
}

export default BackBtn
