import { FC } from 'react'
import { ICat } from '../../../shared/types/index.interface'
import styles from './ImagesCart.module.scss'

const imagesCart: FC<ICat> = cat => {
	return (
		<div className={styles.cart}>
			<img className={styles.image} alt='cat' src={cat.url}></img>
		</div>
	)
}

export default imagesCart
