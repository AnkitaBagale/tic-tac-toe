export const initialUserData = {
	name: '',
	opponent: '',
	chosenSide: '',
};

export const userDataReducer = (state, { type, payload }) => {
	switch (type) {
		case 'SET_NAME': {
			return { ...state, name: payload.name };
		}
		case 'SET_OPPONENT': {
			return { ...state, opponent: payload.opponent };
		}
		case 'SET_SIDE': {
			return { ...state, chosenSide: payload.side };
		}
		default: {
			throw new Error('Unknown action type');
		}
	}
};
