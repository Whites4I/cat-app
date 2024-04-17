import { dImage } from '../../../assets/image/dImage'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useGetArr } from '../../../hooks/useGetArr'
import { ICat } from '../../../shared/types/ICat.interface'
import NoItem from '../no-item/NoItem'
import './GridCarts.module.scss'
import styles from './GridCarts.module.scss'
import { cartStyle, imageStyle } from './cartStyle'

const GridCarts = (entity: object) => {
	const itemArr: ICat[][] = useGetArr(entity)

	const getFavorites = useAppSelector(state => state.toggleCat.favorites)

	const { toggleFavorites } = useAppDispatch()

	return (
		<div className={styles.sectionCarts}>
			{itemArr.length ? (
				itemArr.map((cats, indexArr) => (
					<div key={indexArr} className={styles.carts}>
						{cats.map((cat, indexCat) => (
							<div
								className={styles.cart}
								style={cartStyle[indexCat]}
								key={cat.id}
							>
								<img
									className={styles.image}
									style={imageStyle[indexCat]}
									alt={`Cat id: ${cat.id}`}
									src={cat.url}
								></img>
								<div className={styles.favorites}>
									<button
										className={styles.favoritesBtn}
										type='button'
										title='favorites'
										onClick={() => {
											toggleFavorites(cat as ICat)
										}}
									>
										<svg
											width='20'
											height='17'
											viewBox='0 0 30 26'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											{getFavorites.some(item => item.id === cat.id) ? (
												<path
													className={styles.favoritesImage}
													d={dImage.favoritesFilled}
													fill='#ffffff'
												/>
											) : (
												<path
													className={styles.favoritesImage}
													fillRule='evenodd'
													clipRule='evenodd'
													d={dImage.favorites}
													fill='#FF868E'
												/>
											)}
										</svg>
									</button>
								</div>
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
