import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useLazyGetBreedCatQuery } from '../../../services/CatService'
import { breeds as dataBreeds } from '../../../shared/filters/breeds/breeds'
import { limits as dataLimit } from '../../../shared/filters/limits/limit'

import { dImage } from '../../../assets/image/dImage'
import { useDivideBlock } from '../../../hooks/useDivideBlock'
import { useFindIdByName } from '../../../hooks/useFindIdByName'
import { ICat } from '../../../shared/types/ICat.interface'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import GridCarts from '../../ui/carts/grid-carts/GridCarts'
import MySelect from '../../ui/inputs/select/MySelect'
import Loader from '../../ui/loader/Loader'
import InfoBreed from '../../ui/tables/info-breed/InfoBreed'
import InfoPage from '../../ui/tables/info-page/InfoPage'
import styles from './Breeds.module.scss'

const Breeds: FC = () => {
	const breeds = useMemo(
		() =>
			[{ id: '', name: 'All breeds' }, ...dataBreeds].map(breed => breed.name),
		[]
	)
	const limits = useMemo(() => dataLimit, [])

	const [trigger, { data, isFetching }] = useLazyGetBreedCatQuery()
	const [breed, setBreed] = useState<string>('')
	const [selLimit, setSelLimit] = useState<string>('5')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null)

	const idBreed = useFindIdByName(breed, dataBreeds)

	useEffect(() => {
		trigger({ idBreed, limit: selLimit })
	}, [idBreed, selLimit, trigger])

	const sortedData = useMemo(() => {
		if (!data) return []
		return [...data].sort((a, b) => {
			const nameA = a.breeds?.[0]?.name || ''
			const nameB = b.breeds?.[0]?.name || ''
			if (sortOrder === 'asc') return nameA.localeCompare(nameB)
			if (sortOrder === 'desc') return nameB.localeCompare(nameA)
			return 0
		})
	}, [data, sortOrder])

	const dataBlock = useDivideBlock<ICat>(sortedData)

	const handleSort = useCallback((order: 'asc' | 'desc') => {
		setSortOrder(order)
	}, [])

	return (
		<div className={styles.breeds}>
			<div className={styles.backSection}>
				<BackBtn />
				<InfoPage content={'BREEDS'} />
				<div className={styles.optional}>
					<MySelect
						style={{ width: '213px' }}
						title='Breeds'
						options={breeds}
						placeholder='All breeds'
						setState={value => setBreed(value)}
					/>
					<MySelect
						style={{ width: '101px' }}
						title='Limit'
						options={limits}
						placeholder='Limit: 5'
						setState={value => setSelLimit(value)}
						textToOption='Limit: '
					/>
					<button
						className={styles.sort}
						type='button'
						title='Sorting from Z to A'
						onClick={() => handleSort('desc')}
					>
						<svg
							width='19'
							height='22'
							viewBox='0 0 19 22'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								className={styles.sortImage}
								fillRule='evenodd'
								clipRule='evenodd'
								d={dImage.sortFromZtoA}
								fill='#8C8C8C'
							/>
						</svg>
					</button>
					<button
						className={styles.sort}
						type='button'
						title='Sorting from A to Z'
						onClick={() => handleSort('asc')}
					>
						<svg
							width='19'
							height='22'
							viewBox='0 0 19 22'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								className={styles.sortImage}
								fillRule='evenodd'
								clipRule='evenodd'
								d={dImage.sortFromAtoZ}
								fill='#8C8C8C'
							/>
						</svg>
					</button>
				</div>
			</div>
			{isFetching ? (
				<Loader />
			) : (
				<div className={styles.cartsSection}>
					<GridCarts data={dataBlock} component={InfoBreed} />
				</div>
			)}
		</div>
	)
}

export default Breeds
