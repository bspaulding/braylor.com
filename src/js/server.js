import fs from "fs";
import http from "http";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./components/app.js";
import { parse } from "url";

var reactHtml = ReactDOMServer.renderToString(<App />);
var html = fs.readFileSync("./dist/index.html")
	.toString()
	.replace("<!-- REACT_DOM_INSERT -->", reactHtml);

var server = http.createServer((request, response) => {
	let path = parse(request.url).pathname;
	if (path === "/") {
		response.writeHead(200);
		response.write(html);
		response.end();
	} else {
		fs.readFile("./dist" + path, function(error, data) {
			if (error) {
				response.writeHead(404);
				response.end();
				return;
			}

			response.writeHead(200);
			response.write(data);
			response.end();
		});
	}
});

var port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log("Server listening on port " + port);
});
