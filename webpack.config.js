module.exports = [{
  entry: "./src/js/index.jsx",
  output: {
    path: "./dist",
    filename: "client.bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: "babel",
      query: {
        cacheDirectory: true,
        presets: ["es2015", "react", "stage-1"]
      }
		}, {
			test: /\.jpg/, loader: "url?mimetype=image/jpg"
		}, {
			test: /\.css/, loaders: ["style", "css"]
		}, {
			test: /\.less/, loaders: ["style", "css", "less"]
		}, {
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"
		}, {
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2"
		}, {
    	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"
		}, {
    	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"
		}, {
    	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  },
	target: "web"
}, {
  entry: "./src/js/server.js",
  output: {
    path: "./dist",
    filename: "server.bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: "babel",
      query: {
        cacheDirectory: true,
        presets: ["es2015", "react", "stage-1"]
      }
    }]
  },
	target: "node"
}];
