import { FC } from 'react'
import Navbar from '../../ui/navbar/Navbar'
import styles from './Voting.module.scss'

const Voting: FC = () => {
	return (
		<div className={styles.voting}>
			<Navbar />
			<div className={styles.votingSection}></div>
		</div>
	)
}

export default Voting
