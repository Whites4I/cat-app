import { FC, useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { breeds as data } from '../../../../shared/breeds/breeds'
import { SearchContext } from '../../../layout/Layout'
import styles from './SearchInput.module.scss'

const SearchInput: FC = () => {
	const { changeBreed } = useContext(SearchContext)

	const breeds = data.map(breed => breed.name)

	const inputRef = useRef<HTMLInputElement>(null)

	const [selectedBreed, setSelectedBreed] = useState('')
	const [searchValue, setSearchValue] = useState<string>('')
	const [showAdditionalBlock, setShowAdditionalBlock] = useState(false)

	const filteredBreeds = breeds.filter(breed =>
		breed.toLowerCase().startsWith(searchValue.toLowerCase())
	)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setSearchValue(value)
		setShowAdditionalBlock(true)

		if (breeds.includes(value)) {
			setSelectedBreed(value)
		} else {
			setSelectedBreed('')
		}
	}

	const handleOptionClick = (breed: string) => {
		setSelectedBreed(breed)
		setSearchValue(breed)
		if (inputRef.current) {
			inputRef.current.focus()
		}
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

	const handleSearchClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			changeBreed(searchValue)
			navigate('/search')
		}
	}

	const handleSearch = () => {
		changeBreed(searchValue)
		navigate('/search')
	}

	return (
		<div className={styles.customInputContainer}>
			<input
				ref={inputRef}
				className={styles.searchInput}
				type='text'
				placeholder='Search for breeds by name...'
				value={selectedBreed ? selectedBreed : searchValue}
				onClick={handleInputClick}
				onChange={handleInputChange}
				onBlur={handleInputBlur}
				onKeyDown={handleSearchClick}
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
				onClick={handleSearch}
			></button>
		</div>
	)
}

export default SearchInput
