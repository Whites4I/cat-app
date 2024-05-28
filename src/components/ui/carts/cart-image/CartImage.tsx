import { FC } from 'react'
import { ICart } from '../../../../shared/types/ICart.interface'
import styles from './CartImage.module.scss'
import { cartStyle } from './cartStyle'

const CartImage: FC<ICart> = ({
	cat,
	indexCat,
	toggle,
	dataArr,
	component: Component,
}) => {
	return (
		<div className={styles.cart}>
			<img
				className={styles.image}
				loading='lazy'
				style={cartStyle[indexCat]}
				alt={`Cat id: ${cat.id}`}
				src={cat.url}
			></img>
			<div className={styles.container}>
				{Component ? (
					<Component cat={cat} toggle={toggle} dataArr={dataArr} />
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default CartImage
