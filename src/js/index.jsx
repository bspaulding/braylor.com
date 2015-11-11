import React from "react";
import { render } from "react-dom";
import createBrowserHistory from "history/lib/createBrowserHistory";
import { Router } from "react-router";
import routes from "./components/routes.jsx";

import "bootstrap/less/bootstrap.less";
import "../css/braylor.css";

// TODO: Need to inject this here :/
// let app = React.createFactory(App)(window.APP_PROPS);
render(
	<Router history={createBrowserHistory()}>
		{routes}
	</Router>,
	document.querySelector("#react-container")
);
