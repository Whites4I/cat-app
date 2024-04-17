import { FC } from 'react'
import { dImage } from '../../../assets/image/dImage'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useGetObjG } from '../../../hooks/useGetObj'
import {
	useGetRandomCatQuery,
	useLazyGetRandomCatQuery,
} from '../../../services/CatService'
import { ICat } from '../../../shared/types/ICat.interface'
import BackBtn from '../../ui/buttons/BackBtn/BackBtn'
import HistoryCart from '../../ui/history-cart/HistoryCart'
import Loader from '../../ui/loader/Loader'
import Table from '../../ui/table/Table'
import styles from './Voting.module.scss'

const Voting: FC = () => {
	const { isFetching, data: firstData } = useGetRandomCatQuery(null)
	const objCat = useGetObjG<ICat>(firstData)

	const [getNewCat, { isLoading, data }] = useLazyGetRandomCatQuery()
	const nextCat = useGetObjG<ICat>(data)

	const { toggleFavorites, toggleDislikes, toggleLikes } = useAppDispatch()

	const getFavorites = useAppSelector(state => state.toggleCat.favorites)
	const onFavoritesFirst = getFavorites.some(item => item.id === objCat?.id)
	const onFavorites = getFavorites.some(item => item.id === nextCat?.id)

	return (
		<div className={styles.voting}>
			<div className={styles.backSection}>
				<div className={styles.backBtn}>
					<BackBtn />
				</div>

				<div className={styles.table}>
					<Table content={'VOTING'} />
				</div>
			</div>

			<div className={styles.voteSection}>
				<div className={styles.imageWrapper}>
					{isLoading || isFetching ? (
						<Loader />
					) : nextCat ? (
						<img className={styles.image} alt='cat' src={nextCat?.url}></img>
					) : (
						<img className={styles.image} alt='cat' src={objCat?.url}></img>
					)}
				</div>

				<div className={styles.voteBtn}>
					<button
						className={styles.likesBtn}
						type='button'
						title='likes'
						onClick={() => {
							getNewCat(null)
							toggleLikes(objCat as ICat)
						}}
					>
						<svg
							width='30'
							height='30'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								className={styles.likesImage}
								fill='#FF868E'
								fillRule='evenodd'
								d={dImage.likes}
								clipRule='evenodd'
							/>
						</svg>
					</button>

					<button
						className={styles.favoritesBtn}
						type='button'
						title='favorites'
						onClick={() => {
							toggleFavorites(objCat as ICat)
						}}
					>
						<svg
							width='30'
							height='26'
							viewBox='0 0 30 26'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							{onFavoritesFirst || onFavorites ? (
								<path d={dImage.favoritesFilled} fill='#ffffff' />
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

					<button
						className={styles.dislikesBtn}
						type='button'
						title='dislikes'
						onClick={() => {
							getNewCat(null)
							toggleDislikes(objCat as ICat)
						}}
					>
						<svg
							width='30'
							height='30'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								className={styles.dislikesImage}
								fillRule='evenodd'
								clipRule='evenodd'
								d={dImage.dislikes}
								fill='#FF868E'
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className={styles.logSection}>
				<HistoryCart />
			</div>
		</div>
	)
}

export default Voting
