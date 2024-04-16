import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useGetArr } from '../../../hooks/useGetArr'
import { ICat } from '../../../shared/types/index.interface'
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
													d='M8.07107 0C3.61354 0 0 3.61354 0 8.07107C0 10.2116 0.850339 12.2646 2.36396 13.7782L14.2929 25.7071C14.6834 26.0976 15.3166 26.0976 15.7071 25.7071L27.636 13.7782C29.1497 12.2646 30 10.2116 30 8.07107C30 3.61354 26.3865 0 21.9289 0C19.7884 0 17.7354 0.850341 16.2218 2.36396L15 3.58579L13.7782 2.36396C12.2646 0.850343 10.2116 0 8.07107 0Z'
													fill='#ffffff'
												/>
											) : (
												<path
													className={styles.favoritesImage}
													fillRule='evenodd'
													clipRule='evenodd'
													d='M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z'
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
