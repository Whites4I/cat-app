import { FC } from 'react'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.logo}>
				<img alt='Logo' src='/logo.svg'></img>
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
					<div className={styles.menuVoting}>
						<div className={styles.menuVotingImage}></div>
						<button className={styles.menuVotingBtn} type='button'>
							VOTING
						</button>
					</div>
					<div className={styles.menuBreeds}>
						<div className={styles.menuBreedsImage}></div>
						<button className={styles.menuBreedsBtn} type='button'>
							BREEDS
						</button>
					</div>
					<div className={styles.menuGallery}>
						<div className={styles.menuGalleryImage}></div>
						<button className={styles.menuGalleryBtn} type='button'>
							GALLERY
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
