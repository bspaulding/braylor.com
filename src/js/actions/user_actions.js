export const SET_USER = "SET_USER";
export function setUser(userId, ipAddress, agent) {
	return { type: SET_USER, payload: { userId, ipAddress, agent } };
}

