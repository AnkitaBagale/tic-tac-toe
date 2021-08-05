export const checkWinner = (markedBoxes) => {
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < winningCombinations.length; i++) {
		const [idx1, idx2, idx3] = winningCombinations[i];
		if (
			markedBoxes[idx1] &&
			markedBoxes[idx1] === markedBoxes[idx2] &&
			markedBoxes[idx1] === markedBoxes[idx3]
		) {
			return markedBoxes[idx1];
		}
	}
	return null;
};
