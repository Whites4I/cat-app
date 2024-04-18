import { FC } from 'react'
import { useGetArr } from '../../../hooks/useGetArr'
import { ICat } from '../../../shared/types/ICat.interface'
import { IGridCarts } from '../../../shared/types/IGridCarts.interface'
import Cart from '../cart/Cart'
import { cartStyle } from '../cart/cartStyle'
import NoItem from '../no-item/NoItem'
import './GridCarts.module.scss'
import styles from './GridCarts.module.scss'

const GridCarts: FC<IGridCarts> = ({
	data,
	dataFavorite,
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
									dataArr={dataFavorite}
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
