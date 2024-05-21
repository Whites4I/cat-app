import { FC, useEffect, useMemo, useState } from 'react'
import { useLazyGetBreedCatQuery } from '../../../services/CatService'
import { breeds as dataBreeds } from '../../../shared/breeds/breeds'
import { limit as dataLimit } from '../../../shared/limit/limit'

import { useDivideBlock } from '../../../hooks/useDivideBlock'
import { EBreed } from '../../../shared/types/EBreed.enum'
import { ICat } from '../../../shared/types/ICat.interface'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import GridCarts from '../../ui/carts/grid-carts/GridCarts'
import MySelect from '../../ui/inputs/select/MySelect'
import Loader from '../../ui/loader/Loader'
import Table from '../../ui/tables/tables-back-section/Table'
import styles from './Breeds.module.scss'

const Breeds: FC = () => {
	const breeds = useMemo(() => dataBreeds.map(breed => breed.name), [])
	const limits = useMemo(() => dataLimit.map(limit => limit), [])

	const [trigger, { data, isLoading }] = useLazyGetBreedCatQuery()
	const [breed, setBreed] = useState<EBreed | ''>('')
	const [selLimit, setSelLimit] = useState<number | undefined>(undefined)

	useEffect(() => {
		console.log(`Breed: ${breed}, Limit: ${selLimit}`)
		trigger({ breed, limit: selLimit })
	}, [breed, selLimit, trigger])

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
							firstOption={'All Breeds'}
							firstValue={''}
							title={'Choose a breed'}
							setState={value => setBreed(value as EBreed | '')}
						/>
					</div>

					<div className={styles.chooseLimit}>
						<MySelect
							options={limits}
							firstOption={'Select Limit'}
							firstValue={''}
							title={'Choose a limit'}
							setState={value => setSelLimit(value ? Number(value) : undefined)}
						/>
					</div>
				</div>
			</div>

			<div className={styles.cartsSection}>
				{isLoading && <Loader />}
				{data && <GridCarts data={dataBlock} />}
			</div>
		</div>
	)
}

export default Breeds
