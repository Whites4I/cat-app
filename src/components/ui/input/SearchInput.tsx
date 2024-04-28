import { FC, useRef, useState } from 'react'
import { breeds as data } from '../../../shared/breeds/breeds'
import styles from './SearchInput.module.scss'

const SearchInput: FC = () => {
	const breeds = data.map(breed => breed.name)

	const inputRef = useRef<HTMLInputElement>(null)

	const [selectedBreed, setSelectedBreed] = useState('')
	const [searchValue, setSearchValue] = useState('')
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
				// onKeyDown={}
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
				// onClick={}
			></button>
		</div>
	)
}

export default SearchInput
