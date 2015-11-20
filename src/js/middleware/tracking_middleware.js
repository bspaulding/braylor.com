import httpplease from "httpplease";

let url = "https://xfxjfz6cqf.execute-api.us-west-2.amazonaws.com/staging/events";

let actionsToIgnore = [
	"@@reduxReactRouter/replaceRoutes",
	"@@reduxReactRouter/match"
];

function postState(state) {
	httpplease({
		method: "post",
		url,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(state)
	});
}

const tracker = store => next => action => {
	let result = next(action);
	let state = store.getState();

	// if (state.router && actionsToIgnore.indexOf(action.type) < 0) {
		// console.log("tracking state: ", state);
		// console.log("from action: ", action);
		postState(state);
	// }

	return result;
}

export default tracker;
