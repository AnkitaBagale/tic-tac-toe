import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserData } from '../context/UserDataProvider';
import { TicTacButton } from './TicTacButton';
import { checkWinner } from './utils';

export const TicTacToeGame = () => {
	const [boxes, setBoxes] = useState(Array(9).fill(null));
	const {
		state: { chosenSide, opponent },
	} = useUserData();

	const initialCrossIsNext = chosenSide === 'X' ? true : false;
	const [crossIsNext, setCrossIsNext] = useState(initialCrossIsNext);
	const [scores, setScores] = useState({ player1: 0, player2: 0 });
	const [winner, setWinner] = useState(null);
	const x0 = crossIsNext ? 'X' : '0';

	const showWinner = () => {
		return winner === chosenSide
			? '🎉 Player 1 Won the Game 🎉'
			: `🎉 ${opponent} Won the Game 🎉`;
	};

	const resetGame = () => {
		setBoxes(Array(9).fill(null));
		setWinner(null);
		setCrossIsNext(initialCrossIsNext);
	};

	const twoPlayersGameButtonClicked = (i) => {
		if (!boxes[i]) {
			const newStateOfBoxes = boxes.map((box, idx) => (i === idx ? x0 : box));
			setBoxes(newStateOfBoxes);
			setCrossIsNext((crossIsNext) => !crossIsNext);
			const winner = checkWinner(newStateOfBoxes);

			if (winner) {
				setWinner(winner);
				const newScore =
					winner === chosenSide
						? { ...scores, player1: scores.player1 + 1 }
						: { ...scores, player2: scores.player2 + 1 };
				setScores(newScore);
			}
		}
	};

	return (
		<div className='m-auto text-center w-full'>
			{winner && <div className='result'>{showWinner()}</div>}

			<div className='flex justify-around items-center p-t-b-1'>
				<p className='flex-3'>Player 1</p>
				<span className='capsule flex-3'>{`${scores.player1} - ${scores.player2}`}</span>
				<p className='flex-3'>{opponent}</p>
			</div>

			<div className='board'>
				{boxes.map((box, i) => (
					<TicTacButton
						key={i}
						value={box}
						idx={i}
						clickHandler={twoPlayersGameButtonClicked}
					/>
				))}
			</div>

			<button onClick={resetGame} className='btn primary-btn mt-1'>
				Play Again
			</button>

			<br />

			<Link to='/' className='icon-btn rounded-full mt-2'>
				<i className='fas fa-cog text-blue'></i>
			</Link>
		</div>
	);
};
