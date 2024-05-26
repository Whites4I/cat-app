import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { dImage } from '../../../../assets/image/dImage'
import Search from '../../../ui/inputs/search/SearchInput'
import styles from './Navbar.module.scss'

const Navbar: FC = () => {
	return (
		<div className={styles.navbar}>
			<Search />
			<div className={styles.socialPagesBtn}>
				<NavLink
					className={({ isActive }) =>
						[isActive ? styles.likesNavActive : styles.likesNav].join('')
					}
					to={'/likes'}
				>
					<button className={styles.likesNavBtn} type='button' title='likes'>
						<svg
							width='30'
							height='30'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								className={styles.likesNavImage}
								fill='#FF868E'
								fillRule='evenodd'
								d={dImage.likes}
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</NavLink>

				<NavLink
					className={({ isActive }) =>
						[isActive ? styles.favoritesNavActive : styles.favoritesNav].join(
							''
						)
					}
					to={'/favorites'}
				>
					<button
						className={styles.favoritesNavBtn}
						type='button'
						title='favorites'
					>
						<svg
							width='30'
							height='26'
							viewBox='0 0 30 26'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								className={styles.favoritesNavImage}
								fillRule='evenodd'
								clipRule='evenodd'
								d={dImage.favorites}
								fill='#FF868E'
							/>
						</svg>
					</button>
				</NavLink>

				<NavLink
					className={({ isActive }) =>
						[isActive ? styles.dislikesNavActive : styles.dislikesNav].join('')
					}
					to={'/dislikes'}
				>
					<button
						className={styles.dislikesNavBtn}
						type='button'
						title='dislikes'
					>
						<svg
							width='30'
							height='30'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								className={styles.dislikesNavImage}
								fillRule='evenodd'
								clipRule='evenodd'
								d={dImage.dislikes}
								fill='#FF868E'
							/>
						</svg>
					</button>
				</NavLink>
			</div>
		</div>
	)
}

export default Navbar
