import React from "react";
import { render } from "react-dom";
import { Provider, connect } from "react-redux";
import { ReduxRouter } from "redux-router";

// import "bootstrap/less/bootstrap.less";
import "../css/bootstrap.less";
import "../css/fonts.less";
import "../css/braylor.css";
import "../css/lightbox.css"

// Page Specific Styles
import "../css/location.css";
import "../css/photos.css";

import store from "./store.js"

// TODO: Need to inject this here :/
// let app = React.createFactory(App)(window.APP_PROPS);
render(
	<Provider store={store}>
		<ReduxRouter/>
	</Provider>,
	document.querySelector("#react-container")
);
