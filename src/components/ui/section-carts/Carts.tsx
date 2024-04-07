import { useGetArr } from '../../../hooks/useGetArr'
import ImagesCart from '../images-cart/ImagesCart'
import NoItem from '../no-item/NoItem'
import styles from './Carts.module.scss'

const Carts = (items: object) => {
	const itemsArr = useGetArr(items)

	return (
		<div className={styles.carts}>
			{itemsArr.length ? (
				itemsArr.map(item => <ImagesCart key={item.id} {...item} />)
			) : (
				<NoItem />
			)}
		</div>
	)
}

export default Carts
