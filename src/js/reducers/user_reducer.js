export const SET_USER = "SET_USER";

let initialState =  {};

export default function userReducer(state, action) {
	if (!state) {
		state = initialState;
	}

	switch (action.type) {
	case SET_USER:
		return {
			id: action.payload.userId
		};
	default:
		return state;
	}
}
