import App from "./app.jsx";
import Menu from "./menu.jsx";
import Story from "./story.jsx";
import Registry from "./registry.jsx";
import Photos from "./photos.jsx";
import Location from "./Location.jsx";
import React from "react";
import { Route, IndexRoute } from "react-router";

let router = (
	<Route path="/" component={App}>
		<IndexRoute component={Story}/>
		<Route path="menu" component={Menu}/>
		<Route path="registry" component={Registry}/>
		<Route path="photos" component={Photos}/>
		<Route path="location" component={Location}/>
	</Route>
);

export default router;
