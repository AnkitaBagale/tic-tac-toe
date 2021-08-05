import { createContext, useContext, useReducer } from 'react';
import { initialUserData, userDataReducer } from './reducer/user-data.reducer';

const UserData = createContext();

export const UserDataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userDataReducer, initialUserData);
	return (
		<UserData.Provider value={{ state, dispatch }}>
			{children}
		</UserData.Provider>
	);
};

export const useUserData = () => {
	return useContext(UserData);
};
