import { FC, useContext, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { breeds as data } from '../../../../shared/breeds/breeds'
import { SearchContext } from '../../../layout/Layout'
import styles from './SearchInput.module.scss'

const SearchInput: FC = () => {
	const { changeBreed } = useContext(SearchContext)

	const breeds = useMemo(() => data.map(breed => breed.name), [])

	const inputRef = useRef<HTMLInputElement>(null)

	const [selectedBreed, setSelectedBreed] = useState<string>('')
	const [searchValue, setSearchValue] = useState<string>('')
	const [showAdditionalBlock, setShowAdditionalBlock] = useState(false)

	const filteredBreeds = useMemo(
		() =>
			breeds.filter(breed =>
				breed.toLowerCase().startsWith(searchValue.toLowerCase())
			),
		[breeds, searchValue]
	)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setSearchValue(value)
		setShowAdditionalBlock(true)

		setSelectedBreed(breeds.includes(value) ? value : '')
	}

	const handleOptionClick = (breed: string) => {
		setSelectedBreed(breed)
		setSearchValue('')
		if (inputRef.current) {
			inputRef.current.blur()
		}
		handleSearch(breed)
	}

	const handleInputClick = () => {
		setShowAdditionalBlock(true)
	}

	const handleInputBlur = () => {
		setTimeout(() => {
			setShowAdditionalBlock(false)
		}, 200)
	}

	const navigate = useNavigate()

	const handleSearchKeyDown: React.KeyboardEventHandler<
		HTMLInputElement
	> = e => {
		if (e.key === 'Enter') {
			handleSearch(selectedBreed || searchValue)
		}
	}

	const handleSearchButtonClick: React.MouseEventHandler<
		HTMLButtonElement
	> = () => {
		handleSearch(selectedBreed || searchValue)
	}

	const handleSearch = (breed: string) => {
		if (changeBreed) {
			changeBreed(breed)
			setShowAdditionalBlock(false)
			setSearchValue('')
			navigate('/search')
		}
	}

	return (
		<div className={styles.customInputContainer}>
			<input
				ref={inputRef}
				className={styles.searchInput}
				type='text'
				placeholder='Search for breeds by name...'
				value={searchValue}
				onClick={handleInputClick}
				onChange={handleInputChange}
				onBlur={handleInputBlur}
				onKeyDown={handleSearchKeyDown}
			/>
			{showAdditionalBlock && (
				<div className={styles.blockOptions}>
					<div className={styles.options}>
						<ul>
							{filteredBreeds.length ? (
								filteredBreeds.map(breed => (
									<li key={breed} onClick={() => handleOptionClick(breed)}>
										{breed}
									</li>
								))
							) : (
								<li>
									<p>Oops can't find any result</p>
								</li>
							)}
						</ul>
					</div>
				</div>
			)}

			<button
				className={styles.searchBtn}
				type='button'
				title='search'
				onClick={handleSearchButtonClick}
			></button>
		</div>
	)
}

export default SearchInput
