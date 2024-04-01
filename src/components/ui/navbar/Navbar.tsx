import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Search from '../search/Search'
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
						<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'>
							<path
								className={styles.likesNavImage}
								fill='#FF868E'
								fill-rule='evenodd'
								d='M0 15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15ZM15 2C7.82 2 2 7.82 2 15s5.82 13 13 13 13-5.82 13-13S22.18 2 15 2Zm-5 10H8v-2h2v2Zm12 0h-2v-2h2v2ZM9.2 16.6l.6.8c2.6 3.467 7.8 3.467 10.4 0l.6-.8 1.6 1.2-.6.8c-3.4 4.533-10.2 4.533-13.6 0l-.6-.8 1.6-1.2Z'
								clip-rule='evenodd'
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
						<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'>
							<path
								className={styles.favoritesNavImage}
								fill='#FF868E'
								fill-rule='evenodd'
								d='M0 15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15ZM15 2C7.82 2 2 7.82 2 15s5.82 13 13 13 13-5.82 13-13S22.18 2 15 2Zm-5 10H8v-2h2v2Zm12 0h-2v-2h2v2ZM9.2 16.6l.6.8c2.6 3.467 7.8 3.467 10.4 0l.6-.8 1.6 1.2-.6.8c-3.4 4.533-10.2 4.533-13.6 0l-.6-.8 1.6-1.2Z'
								clip-rule='evenodd'
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
						<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'>
							<path
								className={styles.dislikesNavImage}
								fill='#FF868E'
								fill-rule='evenodd'
								d='M0 15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15ZM15 2C7.82 2 2 7.82 2 15s5.82 13 13 13 13-5.82 13-13S22.18 2 15 2Zm-5 10H8v-2h2v2Zm12 0h-2v-2h2v2ZM9.2 16.6l.6.8c2.6 3.467 7.8 3.467 10.4 0l.6-.8 1.6 1.2-.6.8c-3.4 4.533-10.2 4.533-13.6 0l-.6-.8 1.6-1.2Z'
								clip-rule='evenodd'
							/>
						</svg>
					</button>
				</NavLink>
			</div>
		</div>
	)
}

export default Navbar
