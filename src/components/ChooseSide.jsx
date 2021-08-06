import { Link } from 'react-router-dom';
import { useUserData } from '../context/UserDataProvider';
import { CrossSymbol } from './CrossSymbol';
import { ZeroSymbol } from './ZeroSymbol';

export const ChooseSide = () => {
	const {
		dispatch,
		state: { chosenSide },
	} = useUserData();
	const selectSide = (side) => {
		dispatch({ type: 'SET_SIDE', payload: { side } });
	};

	return (
		<div className='home-container'>
			<h1 className='p-t-b-2 font-sm'>Pick your side</h1>

			<div>
				<label className='radio-label mr-2'>
					<input
						checked={chosenSide === 'X'}
						className='radio-blue'
						type='radio'
						value='X'
						name='side'
						onChange={(e) => selectSide(e.target.value)}
					/>
					<span className='radio-symbol'></span>
					<CrossSymbol />
				</label>
				<label className='radio-label'>
					<input
						checked={chosenSide === '0'}
						className='radio-blue'
						type='radio'
						value='0'
						name='side'
						onChange={(e) => selectSide(e.target.value)}
					/>
					<span className='radio-symbol'></span>
					<ZeroSymbol />
				</label>
			</div>

			<br />
			<Link to='/game' className='btn secondary-btn mt-1'>
				Continue
			</Link>
		</div>
	);
};
