import { useState } from 'react';
import { TicTacButton } from './TicTacButton';
import { checkWinner } from './utils';

const Board = ({ boxes, clickHandler }) => (
	<div className='board'>
		{boxes.map((box, i) => (
			<TicTacButton key={i} value={box} idx={i} clickHandler={clickHandler} />
		))}
	</div>
);

export const TicTacToeGame = () => {
	const [boxes, setBoxes] = useState(Array(9).fill(null));

	const [crossIsNext, setCrossIsNext] = useState(true);

	const [winner, setWinner] = useState(null);

	const x0 = crossIsNext ? 'X' : 'O';

	const handleClick = (i) => {
		console.log('clicked');
		if (!boxes[i]) {
			const newStateOfBoxes = boxes.map((box, idx) => (i === idx ? x0 : box));
			setBoxes(newStateOfBoxes);
			setCrossIsNext((crossIsNext) => !crossIsNext);
			const winner = checkWinner(newStateOfBoxes);

			if (winner) {
				console.log(winner);
				setWinner(winner);
			}
		}
	};

	return (
		<>
			<Board boxes={boxes} clickHandler={handleClick} />
			{winner}
		</>
	);
};
