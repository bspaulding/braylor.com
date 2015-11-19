import App from "../containers/app_container.jsx";
import Menu from "./menu.jsx";
import Welcome from "./welcome.jsx";
import Photos from "./photos.jsx";
import Location from "./location.jsx";
import StayUpdated from "./stay_updated.jsx";
import React from "react";
import { Route, IndexRoute } from "react-router";

let router = (
	<Route path="/" component={App}>
		<IndexRoute component={Welcome}/>
		<Route path="menu" component={Menu}/>
		<Route path="photos" component={Photos}/>
		<Route path="location" component={Location}/>
		<Route path="stay_updated" component={StayUpdated}/>
	</Route>
);

export default router;