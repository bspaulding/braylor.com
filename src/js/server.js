import fs from "fs";
import cluster from "cluster";
import http from "http";
import { cpus } from "os";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { RoutingContext } from './ReactRouter'
import { match, reduxReactRouter } from "redux-router/server";
import { ReduxRouter } from "redux-router";
import routes from "./components/routes.jsx";
import { parse } from "url";
import zlib from "zlib";
import { makeStore } from "./store.js";
import { createMemoryHistory } from "history";
import createLocation from "history/lib/createLocation";
import { Provider } from "react-redux";
import { setUser } from "./actions/user_actions.js";
import assign from "./assign.js";

// User Id stuff
import FlakeIdGen from 'flake-idgen';
import intformat from 'biguint-format';
import Cookies from "cookies";

let generator = new FlakeIdGen();

if (cluster.isMaster) {
	for (var i = 0; i < cpus().length; i += 1) {
		cluster.fork();
	}

	cluster.on('exit', function(worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' died');
	});
} else {

var template = fs.readFileSync("./dist/index-template.html")
	.toString();

let commonHeaders = {
	'Cache-Control': 'public, max-age=31536000',
	'Content-Encoding': 'gzip'
};

var server = http.createServer((request, response) => {
	let ip = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
	let agent = request.headers["user-agent"];
	console.log(process.pid + " handling: " + request.url + " from " + ip);
	let path = parse(request.url).pathname;

	var cookies = new Cookies(request, response);
	var userId = cookies.get("userid");
	if (!userId) {
		userId = intformat(generator.next(), 'hex', {prefix: "0x"});
		cookies.set("userid", userId);
	}

	if (path === "/client.bundle.js" ||
		path.indexOf(".jpg") >= 0 ||
		path.indexOf(".woff") >= 0) {
		fs.readFile("./dist" + path, (error, data) => {
			if (error) {
				response.writeHead(500);
				response.end();
				return;
			}

			zlib.gzip(data, (_, result) => {
				response.writeHead(200, assign({'Access-Control-Allow-Origin': '*'}, commonHeaders));
				response.write(result);
				response.end();
			});
		});

		return;
	}

	let store = makeStore(reduxReactRouter, createMemoryHistory);
	store.dispatch(setUser(userId, ip, agent));
	store.dispatch(
		match(createLocation(path), (error, redirectLocation, props) => {
			if (!props) {
				response.writeHead(404);
				response.end();
				return;
			}

			var reactHtml = ReactDOMServer.renderToString((
				<Provider store={store}>
					<ReduxRouter {...props}/>
				</Provider>
			));
			var html = template
				.replace("<!-- REACT_DOM_INSERT -->", reactHtml)
				.replace("<!-- APP_PROPS_INSERT -->", JSON.stringify(store.getState()));
			zlib.gzip(html, (_, result) => {
				response.writeHead(200, assign({'Content-Type': 'text/html'}, commonHeaders));
				response.write(result);
				response.end();
			});
		})
	);
});

var port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log("Server listening on port " + port);
});
}
