import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { UserDataProvider } from './context/UserDataProvider';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<UserDataProvider>
				<App />
			</UserDataProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);
