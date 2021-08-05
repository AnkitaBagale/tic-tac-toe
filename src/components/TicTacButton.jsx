import { CrossSymbol } from './CrossSymbol';
import { ZeroSymbol } from './ZeroSymbol';

export const TicTacButton = ({ value, idx, clickHandler }) => {
	return (
		<button
			className={`tic-tac-toe-btn ${'btn-' + idx.toString()}`}
			onClick={() => clickHandler(idx)}>
			{value ? value === 'X' ? <CrossSymbol /> : <ZeroSymbol /> : ''}
		</button>
	);
};
