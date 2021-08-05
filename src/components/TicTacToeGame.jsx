import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserData } from '../context/UserDataProvider';
import { TicTacButton } from './TicTacButton';
import { checkWinner } from './utils';

export const TicTacToeGame = () => {
	const [boxes, setBoxes] = useState(Array(9).fill(null));
	const {
		state: { chosenSide },
	} = useUserData();
	const initialCrossIsNext = chosenSide === 'X' ? true : false;
	const [crossIsNext, setCrossIsNext] = useState(initialCrossIsNext);

	const [winner, setWinner] = useState(null);

	const {
		state: { opponent },
	} = useUserData();

	const x0 = crossIsNext ? 'X' : '0';

	const clickHandler = (i) => {
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
		<div className='m-auto text-center'>
			{winner && (
				<div className='result'>
					🎉
					{winner === chosenSide
						? 'Player 1 Won the Game'
						: `${opponent} Won the Game`}
					🎉
				</div>
			)}

			<div className='flex justify-around items-center p-t-b-1'>
				<p>Player 1</p>
				<span className='capsule'>
					{winner ? (winner === chosenSide ? '1 - 0' : '0 - 1') : '0 - 0'}
				</span>
				<p>{opponent}</p>
			</div>
			<div className='board'>
				{boxes.map((box, i) => (
					<TicTacButton
						key={i}
						value={box}
						idx={i}
						clickHandler={clickHandler}
					/>
				))}
				<div
					className='overlay'
					style={{ display: winner ? 'block' : 'none' }}></div>
			</div>

			<button
				onClick={() => {
					setBoxes(Array(9).fill(null));
					setWinner(null);
					setCrossIsNext(initialCrossIsNext);
				}}
				className='btn primary-btn mt-1'>
				Play Again
			</button>
			<br />
			<Link to='/' className='icon-btn rounded-full mt-2'>
				<i className='fas fa-cog text-blue'></i>
			</Link>
		</div>
	);
};
