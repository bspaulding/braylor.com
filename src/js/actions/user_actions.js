export const SET_USER = "SET_USER";

export function setUser(userId) {
	return { type: SET_USER, payload: { userId } };
}
