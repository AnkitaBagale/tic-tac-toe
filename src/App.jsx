import { Route, Routes } from 'react-router';
import { ChooseSide, Home } from './components';
import { TicTacToeGame } from './components/TicTacToeGame';
import './styles.css';

export const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pick' element={<ChooseSide />} />
				<Route path='/game' element={<TicTacToeGame />} />
			</Routes>
		</div>
	);
};
