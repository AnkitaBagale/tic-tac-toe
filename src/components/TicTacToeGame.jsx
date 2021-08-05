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
		<div className='m-auto'>
			<div className='flex justify-around items-center p-t-b-1'>
				<p>Alex</p>
				<span className='capsule'>0 - 0</span>
				<p>AI</p>
			</div>
			<Board boxes={boxes} clickHandler={handleClick} />
			<button className='icon-btn rounded-full mt-3'>
				<i className='fas fa-cog text-blue'></i>
			</button>
		</div>
	);
};
