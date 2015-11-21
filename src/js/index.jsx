import React from "react";
import { render } from "react-dom";
import { Provider, connect } from "react-redux";
import { ReduxRouter } from "redux-router";
import routes from "./components/routes.jsx"
import { makeStore } from "./store.js"
import { createHistory } from "history";
import { reduxReactRouter } from 'redux-router';

// import "bootstrap/less/bootstrap.less";
import "../css/bootstrap.less";
import "../css/fonts.less";
import "../css/main.less";
import "../css/braylor.css";
import "../css/lightbox.css"
import "../css/spin.css";

// Page Specific Styles
import "../css/location.css";
import "../css/photos.css";
import "../css/menu.css";
import "../css/welcome.less";

render(
	<Provider store={makeStore(reduxReactRouter, createHistory, window.__INITIAL_STATE__)}>
		<ReduxRouter>
			{routes}
		</ReduxRouter>
	</Provider>,
	document.querySelector("#react-container")
);
