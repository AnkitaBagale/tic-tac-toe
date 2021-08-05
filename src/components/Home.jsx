import { Link } from 'react-router-dom';
import { CrossSymbol } from './CrossSymbol';
import { ZeroSymbol } from './ZeroSymbol';

export const Home = () => {
	return (
		<div className='home-container'>
			<CrossSymbol />
			<ZeroSymbol />
			<h1 className='p-t-b-2 font-sm'>Choose your play mode</h1>
			<Link to='/pick' className='btn primary-btn'>
				With AI
			</Link>
			<br />
			<button className='btn secondary-btn mt-1'>With a friend</button>
			<br />
			<button className='icon-btn rounded-full mt-3'>
				<i className='fas fa-cog text-blue'></i>
			</button>
		</div>
	);
};
