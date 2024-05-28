import { FC, useEffect, useMemo, useState } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useDivideBlock } from '../../../hooks/useDivideBlock'
import { useFindIdByName } from '../../../hooks/useFindIdByName'
import { useLazyGetFilteredCatQuery } from '../../../services/CatService'
import { breeds as dataBreeds } from '../../../shared/filters/breeds/breeds'
import { limits as dataLimit } from '../../../shared/filters/limits/limit'
import { orders as dataOrders } from '../../../shared/filters/orders/orders'
import { types as dataTypes } from '../../../shared/filters/types/types'
import { ICat } from '../../../shared/types/ICat.interface'
import BackBtn from '../../ui/buttons/back-btn/BackBtn'
import FavoritesToggleBtn from '../../ui/buttons/favorites-toggle-btn/FavoritesToggleBtn'
import GridCarts from '../../ui/carts/grid-carts/GridCarts'
import MySelect from '../../ui/inputs/select/MySelect'
import Loader from '../../ui/loader/Loader'
import InfoPage from '../../ui/tables/info-page/InfoPage'
import styles from './Gallery.module.scss'

const Gallery: FC = () => {
	const breeds = useMemo(
		() =>
			[{ id: '', name: 'All breeds' }, ...dataBreeds].map(breed => breed.name),
		[]
	)

	const orders = useMemo(
		() => [{ id: '', name: 'Random' }, ...dataOrders].map(order => order.name),
		[]
	)

	const types = useMemo(
		() => [{ id: '', name: 'All' }, ...dataTypes].map(type => type.name),
		[]
	)

	const { favorites } = useAppSelector(state => state.toggleCat)
	const { toggleFavorites } = useAppDispatch()

	const limits = useMemo(() => dataLimit, [])

	const [trigger, { data, isFetching }] = useLazyGetFilteredCatQuery()
	const [breed, setBreed] = useState<string>('')
	const [selLimit, setSelLimit] = useState<string>('5')
	const [order, setOrder] = useState<'ASC' | 'DESC' | ''>('')
	const [type, setType] = useState<'img' | 'gif' | ''>('')

	const idBreed = useFindIdByName(breed, dataBreeds)
	const idOrder = useFindIdByName(order, dataOrders)
	const idType = useFindIdByName(type, dataTypes)

	useEffect(() => {
		trigger({ idBreed, limit: selLimit, idOrder, idType })
	}, [idBreed, selLimit, trigger, idOrder, idType])

	const dataBlock = useDivideBlock<ICat>(data ? data : [])

	return (
		<div className={styles.gallery}>
			<div className={styles.backSection}>
				<BackBtn />
				<InfoPage content={'GALLERY'} />
			</div>

			<div className={styles.filters}>
				<div className={styles.orders}>
					<label>ORDER</label>
					<MySelect
						style={{
							width: '290px',
							backgroundColor: '#FFFFFF',
							color: '#1d1d1d',
						}}
						title='Order'
						options={orders}
						placeholder='Random'
						setState={value => setOrder(value)}
					/>
				</div>

				<div className={styles.types}>
					<label>TYPE</label>
					<MySelect
						style={{
							width: '290px',
							backgroundColor: '#FFFFFF',
							color: '#1d1d1d',
						}}
						title='Type'
						options={types}
						placeholder='All types'
						setState={value => setType(value)}
					/>
				</div>

				<div className={styles.breeds}>
					<label>BREED</label>
					<MySelect
						style={{
							width: '290px',
							backgroundColor: '#FFFFFF',
							color: '#1d1d1d',
						}}
						title='Breed'
						options={breeds}
						placeholder='All breeds'
						setState={value => setBreed(value)}
					/>
				</div>

				<div className={styles.limits}>
					<label>LIMIT</label>
					<MySelect
						style={{
							width: '240px',
							backgroundColor: '#FFFFFF',
							color: '#1d1d1d',
						}}
						title='Limit'
						options={limits}
						placeholder='Limit: 5'
						setState={value => setSelLimit(value)}
						textToOption='Limit: '
					/>
				</div>
			</div>

			{isFetching ? (
				<Loader />
			) : (
				<div className={styles.cartsSection}>
					{dataBlock && (
						<GridCarts
							data={dataBlock}
							dataComponent={favorites}
							toggle={toggleFavorites}
							component={FavoritesToggleBtn}
						/>
					)}
				</div>
			)}
		</div>
	)
}

export default Gallery
