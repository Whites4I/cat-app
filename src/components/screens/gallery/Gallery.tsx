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
	const limits = useMemo(() => dataLimit, [])

	const { favorites } = useAppSelector(state => state.toggleCat)
	const { toggleFavorites } = useAppDispatch()

	const [trigger, { data, isFetching }] = useLazyGetFilteredCatQuery()
	const [filters, setFilters] = useState({
		breed: '',
		limit: '5',
		order: '',
		type: '',
	})

	const { breed, limit, order, type } = filters

	const idBreed = useFindIdByName(breed, dataBreeds)
	const idOrder = useFindIdByName(order, dataOrders)
	const idType = useFindIdByName(type, dataTypes)

	useEffect(() => {
		trigger({ idBreed, limit, idOrder, idType })
	}, [idBreed, limit, trigger, idOrder, idType])

	const dataBlock = useDivideBlock<ICat>(data || [])

	const handleFilterChange = (key: string, value: string) => {
		setFilters(prevFilters => ({ ...prevFilters, [key]: value }))
	}

	const filterConfigurations = [
		{
			label: 'ORDER',
			options: orders,
			stateKey: 'order',
			placeholder: 'Random',
		},
		{
			label: 'TYPE',
			options: types,
			stateKey: 'type',
			placeholder: 'All types',
		},
		{
			label: 'BREED',
			options: breeds,
			stateKey: 'breed',
			placeholder: 'All breeds',
		},
		{
			label: 'LIMIT',
			options: limits,
			stateKey: 'limit',
			placeholder: 'Limit: 5',
			textToOption: 'Limit: ',
		},
	]

	return (
		<div className={styles.gallery}>
			<div className={styles.backSection}>
				<BackBtn />
				<InfoPage content='GALLERY' />
			</div>

			<div className={styles.filters}>
				{filterConfigurations.map(
					({ label, options, stateKey, placeholder, textToOption }) => (
						<div className={styles[`${stateKey}s`]} key={stateKey}>
							<label>{label}</label>
							<MySelect
								style={{
									width: stateKey === 'limit' ? '240px' : '290px',
									backgroundColor: '#FFFFFF',
									color: '#1d1d1d',
								}}
								title={label}
								options={options}
								placeholder={placeholder}
								setState={value => handleFilterChange(stateKey, value)}
								textToOption={textToOption}
							/>
						</div>
					)
				)}
			</div>

			{isFetching ? (
				<Loader />
			) : (
				<div className={styles.cartsSection}>
					{dataBlock && (
						<GridCarts
							style={{ height: 'calc(100vh - 406px)' }}
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
