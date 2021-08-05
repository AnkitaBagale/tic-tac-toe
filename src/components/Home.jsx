import { useNavigate } from 'react-router-dom';
import { useUserData } from '../context/UserDataProvider';
import { CrossSymbol } from './CrossSymbol';
import { ZeroSymbol } from './ZeroSymbol';

export const Home = () => {
	const { dispatch } = useUserData();

	const navigate = useNavigate();

	const selectPlayer = (player) => {
		dispatch({ type: 'SET_OPPONENT', payload: { opponent: player } });
		navigate('/pick');
	};

	return (
		<div className='home-container'>
			<CrossSymbol />
			<ZeroSymbol />
			<h1 className='p-t-b-2 font-sm'>Choose your play mode</h1>
			<button
				onClick={() => selectPlayer('AI')}
				to='/pick'
				className='btn primary-btn'>
				With AI
			</button>
			<br />
			<button
				onClick={() => selectPlayer('Player 2')}
				className='btn secondary-btn mt-1'>
				With a friend
			</button>
			<br />
			<button className='icon-btn rounded-full mt-3'>
				<i className='fas fa-cog text-blue'></i>
			</button>
		</div>
	);
};
