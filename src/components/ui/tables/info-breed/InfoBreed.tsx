import { FC } from 'react'
import { ICart } from '../../../../shared/types/ICart.interface'
import styles from './InfoBreed.module.scss'

export interface IInfoBreed extends Omit<ICart, 'indexCat, toggle, component'> {
	toggle?: any
}

const InfoBreed: FC<IInfoBreed> = ({ cat }) => {
	return (
		<div className={styles.blockInfoBread}>
			<div className={styles.containerInfoBread}>
				<div className={styles.infoBread}>
					{cat.breeds && cat.breeds[0].name}
				</div>
			</div>
		</div>
	)
}

export default InfoBreed
