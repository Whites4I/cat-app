import { FC } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useGetObjG } from '../../../hooks/useGetObj'
import {
	useGetRandomCatQuery,
	useLazyGetRandomCatQuery,
} from '../../../services/CatService'
import { ICat } from '../../../shared/types/index.interface'
import BackBtn from '../../ui/buttons/BackBtn/BackBtn'
import Loader from '../../ui/loader/Loader'
import Table from '../../ui/table/Table'
import styles from './Voting.module.scss'

const Voting: FC = () => {
	const { isFetching, data: firstData } = useGetRandomCatQuery(null)
	const objCat = useGetObjG<ICat>(firstData)

	const [getNewCat, { isLoading, data }] = useLazyGetRandomCatQuery()
	const nextCat = useGetObjG<ICat>(data)

	const { toggleFavorites, toggleDislikes, toggleLikes } = useAppDispatch()

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
								d='M0 15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15ZM15 2C7.82 2 2 7.82 2 15s5.82 13 13 13 13-5.82 13-13S22.18 2 15 2Zm-5 10H8v-2h2v2Zm12 0h-2v-2h2v2ZM9.2 16.6l.6.8c2.6 3.467 7.8 3.467 10.4 0l.6-.8 1.6 1.2-.6.8c-3.4 4.533-10.2 4.533-13.6 0l-.6-.8 1.6-1.2Z'
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
							<path
								className={styles.favoritesImage}
								fillRule='evenodd'
								clipRule='evenodd'
								d='M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z'
								fill='#FF868E'
							/>
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
								d='M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z'
								fill='#FF868E'
							/>
						</svg>
					</button>
				</div>
				<div className={styles.logSection}></div>
			</div>
		</div>
	)
}

export default Voting
