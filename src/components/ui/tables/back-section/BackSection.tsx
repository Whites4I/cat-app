import { FC, PropsWithChildren, memo } from 'react'
import styles from './BackSection.module.scss'

interface IBackSection {
	content: string
}

const BackSection: FC<PropsWithChildren<IBackSection>> = memo(({ content }) => {
	return <div className={styles.backSection}>{content}</div>
})

export default BackSection
