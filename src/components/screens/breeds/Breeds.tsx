import { FC, useEffect, useMemo, useState } from 'react'
import { useLazyGetBreedCatQuery } from '../../../services/CatService'
import { breeds as dataBreeds } from '../../../shared/breeds/breeds'
import { limit as dataLimit } from '../../../shared/limit/limit'

import { useDivideBlock } from '../../../hooks/useDivideBlock'
import { useFindIdByName } from '../../../hooks/useFindIdByName'
import { ICat } from '../../../shared/types/ICat.interface'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import GridCarts from '../../ui/carts/grid-carts/GridCarts'
import MySelect from '../../ui/inputs/select/MySelect'
import Loader from '../../ui/loader/Loader'
import Table from '../../ui/tables/back-section/BackSection'
import InfoBreed from '../../ui/tables/info-breed/InfoBreed'
import styles from './Breeds.module.scss'

const Breeds: FC = () => {
	const breeds = useMemo(
		() =>
			[{ id: '', name: 'All breeds' }, ...dataBreeds].map(breed => breed.name),
		[]
	)
	const limits = useMemo(() => dataLimit.map(limit => limit), [])

	const [trigger, { data, isLoading }] = useLazyGetBreedCatQuery()
	const [breed, setBreed] = useState<string>('')
	const [selLimit, setSelLimit] = useState<number | undefined>(5)

	const idBreed = useFindIdByName(breed, dataBreeds)

	useEffect(() => {
		trigger({ idBreed, limit: selLimit })
	}, [breed, idBreed, selLimit, trigger])

	const dataBlock = useDivideBlock<ICat>(data ?? [])

	return (
		<div className={styles.breeds}>
			<div className={styles.backSection}>
				<div className={styles.backBtn}>
					<BackBtn />
				</div>

				<div className={styles.table}>
					<Table content={'BREEDS'} />
				</div>

				<div className={styles.optional}>
					<div className={styles.chooseBreed}>
						<MySelect
							options={breeds}
							placeholder={'All breeds'}
							style={{ width: '226px' }}
							setState={value => setBreed(value as string | '')}
						/>
					</div>

					<div className={styles.chooseLimit}>
						<MySelect
							options={limits}
							placeholder={'Limit: 5'}
							style={{ width: '101px' }}
							setState={value => setSelLimit(value ? Number(value) : 5)}
							textToOption='Limit: '
						/>
					</div>
				</div>
			</div>

			<div className={styles.cartsSection}>
				{isLoading ? (
					<Loader />
				) : (
					data && <GridCarts data={dataBlock} component={InfoBreed} />
				)}
			</div>
		</div>
	)
}

export default Breeds
