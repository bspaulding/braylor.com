import { SET_USER } from "../actions/user_actions.js";

let initialState =  {};

export default function userReducer(state, action) {
	if (!state) {
		state = initialState;
	}

	switch (action.type) {
	case SET_USER:
		return {
			id: action.payload.userId,
			ipAddress: action.payload.ipAddress
		};
	default:
		return state;
	}
}
