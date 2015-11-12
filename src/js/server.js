import fs from "fs";
import cluster from "cluster";
import http from "http";
import { cpus } from "os";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { match, RoutingContext } from 'react-router'
import routes from "./components/routes.jsx";
import { parse } from "url";

if (cluster.isMaster) {
	for (var i = 0; i < cpus().length; i += 1) {
		cluster.fork();
	}

	cluster.on('exit', function(worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' died');
	});
} else {

var template = fs.readFileSync("./dist/index.html")
	.toString();

var server = http.createServer((request, response) => {
	console.log(process.pid + " handling: " + request.url);
	let path = parse(request.url).pathname;
	if (path === "/client.bundle.js" || path.indexOf(".woff") >= 0) {
		fs.readFile("./dist" + path, (error, data) => {
			if (error) {
				response.writeHead(500);
				response.end();
				return;
			}

			response.writeHead(200);
			response.write(data);
			response.end();
		});

		return;
	}

	match({ routes, location: path }, (error, redirectLocation, props) => {
		var reactHtml = ReactDOMServer.renderToString(<RoutingContext {...props}/>);
		var html = template.replace("<!-- REACT_DOM_INSERT -->", reactHtml);
		response.writeHead(200);
		response.write(html);
		response.end();
	});
});

var port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log("Server listening on port " + port);
});
}
