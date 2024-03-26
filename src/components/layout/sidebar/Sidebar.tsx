import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.logo}>
				<Link to={'/'}>
					<img alt='Logo' src='/logo.svg'></img>
				</Link>
			</div>

			<div className={styles.greeting}>
				<div className={styles.greetingHi}>Hi!👋</div>
				<div className={styles.greetingText}>Welcome to PetsPaw!</div>
			</div>

			<div className={styles.menuMain}>
				<div className={styles.menuText}>
					<strong>Lets start using The Cat API</strong>
				</div>

				<div className={styles.menuButtons}>
					<NavLink
						className={({ isActive }) =>
							[isActive ? styles.menuVotingActive : styles.menuVoting].join('')
						}
						to={'/voting'}
					>
						<div className={styles.menuVotingImage}></div>
						<button className={styles.menuVotingBtn} type='button'>
							VOTING
						</button>
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							[isActive ? styles.menuBreedsActive : styles.menuBreeds].join('')
						}
						to={'/breeds'}
					>
						<div className={styles.menuBreedsImage}></div>
						<button className={styles.menuBreedsBtn} type='button'>
							BREEDS
						</button>
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							[isActive ? styles.menuGalleryActive : styles.menuGallery].join(
								''
							)
						}
						to={'/gallery'}
					>
						<div className={styles.menuGalleryImage}></div>
						<button className={styles.menuGalleryBtn} type='button'>
							GALLERY
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
