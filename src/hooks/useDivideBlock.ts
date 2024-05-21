export const useDivideBlock = <T>(item: T[]): T[][] => {
	const blocks: T[][] = []

	let startIndex = 0
	const blockSize = 10
	const lengthBlocks = Math.ceil(item.length / blockSize)

	for (let i = 0; i < lengthBlocks; i++) {
		const block = item.slice(startIndex, startIndex + blockSize)
		blocks.push(block)
		startIndex += blockSize
	}

	return blocks
}
