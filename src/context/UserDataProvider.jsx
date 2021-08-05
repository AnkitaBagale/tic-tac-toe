import { createContext, useContext, useReducer } from 'react';
import { initialUserData, userDataReducer } from './reducer/user-data.reducer';

const UserData = createContext();

export const UserDataProvider = ({ children }) => {
	const userDetails = JSON.parse(localStorage.getItem('userData')) || {
		...initialUserData,
	};
	const [state, dispatch] = useReducer(userDetails, userDataReducer);
	return (
		<UserData.Provider value={{ state, dispatch }}>
			{children}
		</UserData.Provider>
	);
};

export const useUserData = () => {
	return useContext(UserData);
};
