import { useGetArr } from '../../../hooks/useGetArr'
import { ICat } from '../../../shared/types/index.interface'
import NoItem from '../no-item/NoItem'
import './GridCarts.module.scss'
import styles from './GridCarts.module.scss'
import { cartStyle } from './styleCarts'

const GridCarts = (item: object) => {
	const itemArr: ICat[][] = useGetArr(item)

	return (
		<div className={styles.carts}>
			{itemArr.length ? (
				itemArr.map((cats, indexArr) => (
					<div key={indexArr} className={styles.cart}>
						{cats.map((cat, indexCat) => (
							<>
								<img
									style={cartStyle[indexCat]}
									key={cat.id}
									alt={`cat id: ${cat.id}`}
									src={cat.url}
								></img>
							</>
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
