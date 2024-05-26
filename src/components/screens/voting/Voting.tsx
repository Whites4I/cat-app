import { FC, useEffect } from 'react'
import { dImage } from '../../../assets/image/dImage'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useGetObjG } from '../../../hooks/useGetObj'
import { useLazyGetRandomCatQuery } from '../../../services/CatService'
import { ICat } from '../../../shared/types/ICat.interface'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import HistoryCart from '../../ui/carts/history-cart/HistoryCart'
import Loader from '../../ui/loader/Loader'
import Table from '../../ui/tables/back-section/BackSection'
import styles from './Voting.module.scss'

const Voting: FC = () => {
	const [getCat, { data, isFetching }] = useLazyGetRandomCatQuery()
	const objCat = useGetObjG<ICat>(data)

	const { toggleFavorites, toggleDislikes, toggleLikes } = useAppDispatch()

	const getFavorites = useAppSelector(state => state.toggleCat.favorites)
	const onFavorites = getFavorites.some(item => item.id === objCat?.id)

	useEffect(() => {
		getCat(null)
	}, [getCat])

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
					{isFetching ? (
						<Loader />
					) : (
						<img className={styles.image} alt='cat' src={objCat?.url} />
					)}
				</div>

				<div className={styles.voteBtn}>
					<button
						className={styles.likesBtn}
						type='button'
						title='likes'
						onClick={() => {
							getCat(null)
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
							{onFavorites ? (
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
							getCat(null)
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
