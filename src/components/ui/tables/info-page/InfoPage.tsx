import { FC, memo } from 'react'
import styles from './InfoPage.module.scss'

interface IInfoPage {
	content: string
}

const InfoPage: FC<IInfoPage> = memo(({ content }) => {
	return <div className={styles.infoPage}>{content}</div>
})

export default InfoPage
