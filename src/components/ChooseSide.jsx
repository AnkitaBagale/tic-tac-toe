import { CrossSymbol } from './CrossSymbol';
import { ZeroSymbol } from './ZeroSymbol';

export const ChooseSide = () => {
	return (
		<div className='home-container'>
			<h1 className='p-t-b-2 font-sm'>Pick your side</h1>

			<div className='flex'>
				<label className='radio-label'>
					<input
						checked
						className='radio-blue'
						type='radio'
						value='cross'
						name='side'
					/>
					<span className='radio-symbol'></span>
					<CrossSymbol />
				</label>
				<label className='radio-label'>
					<input className='radio-blue' type='radio' value='zero' name='side' />
					<span className='radio-symbol'></span>
					<ZeroSymbol />
				</label>
			</div>

			<br />
			<button className='btn secondary-btn mt-1'>Continue</button>
		</div>
	);
};
