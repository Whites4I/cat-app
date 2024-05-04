import { FC } from 'react'
import { useGetArr } from '../../../../hooks/useGetArr'
import { ICat } from '../../../../shared/types/ICat.interface'
import { IGridCarts } from '../../../../shared/types/IGridCarts.interface'
import NoItem from '../../no-item/NoItem'
import Cart from '../cart-image/Cart'
import { cartStyle } from '../cart-image/cartStyle'
import './GridCarts.module.scss'
import styles from './GridCarts.module.scss'

const GridCarts: FC<IGridCarts> = ({
	data,
	dataComponent,
	toggle,
	component,
}) => {
	const itemArr: ICat[][] = useGetArr(data)

	return (
		<div className={styles.sectionCarts}>
			{itemArr.length ? (
				itemArr.map((cats, indexArr) => (
					<div className={styles.carts} key={indexArr}>
						{cats.map((cat, indexCat) => (
							<div style={cartStyle[indexCat]} key={cat.id}>
								<Cart
									cat={cat}
									indexCat={indexCat}
									toggle={toggle}
									dataArr={dataComponent}
									component={component}
								/>
							</div>
						))}
					</div>
				))
			) : (
				<NoItem />
			)}
		</div>
	)
}

export default GridCarts
