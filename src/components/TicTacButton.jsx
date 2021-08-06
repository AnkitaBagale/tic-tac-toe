import { CrossSymbol } from './CrossSymbol';
import { ZeroSymbol } from './ZeroSymbol';

export const TicTacButton = ({ value, idx, clickHandler }) => {
	const getInnertext = () => {
		if (value) {
			return value === 'X' ? <CrossSymbol /> : <ZeroSymbol />;
		} else {
			return '';
		}
	};
	return (
		<button
			className={`tic-tac-toe-btn ${'btn-' + idx.toString()}`}
			onClick={() => clickHandler(idx)}>
			{getInnertext()}
		</button>
	);
};
