import fs from "fs";
import http from "http";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { match, RoutingContext } from 'react-router'
import routes from "./components/routes.jsx";
import { parse } from "url";

var template = fs.readFileSync("./dist/index.html")
	.toString();

var server = http.createServer((request, response) => {
	let path = parse(request.url).pathname;
	if (path === "/client.bundle.js") {
		fs.readFile("./dist/client.bundle.js", (error, data) => {
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
