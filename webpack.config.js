/* global __dirname, module, process, require */

/* eslint-disable no-process-env */

var path = require('path');
var glob = require('glob');
var PurifyCSSPlugin = require("purifycss-webpack");
var env = require("./config/" + (process.env.NODE_ENV || "development"));

module.exports = [{
  entry: "./src/js/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: env.CDN_HOST,
    filename: "client.bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: "babel-loader",
      query: {
        cacheDirectory: true,
        presets: ["es2015", "react", "stage-1"]
      }
    }, {
      test: /\.jpg/, loader: "file-loader?mimetype=image/jpg"
    }, {
      test: /\.css/, loaders: ["style-loader", "css-loader", "autoprefixer-loader"]
    }, {
      test: /\.less/, loaders: ["style-loader", "css-loader", "autoprefixer-loader", "less-loader"]
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }, {
      test: /\.mp4/, loader: "file-loader?mimetype=video/mp4"
    }, {
      test: /\.webm/, loader: "file-loader?mimetype=video/webm"
    }, {
      test: /\.ogg/, loader: "file-loader?mimetype=video/ogg"
    }]
  },
  plugins: [
    new PurifyCSSPlugin({
			paths: glob.sync(path.join(__dirname, "dist/index-template.html"))
		})
  ],
  target: "web"
}, {
  entry: "./src/js/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: env.CDN_HOST,
    filename: "server.bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: "babel-loader",
      query: {
        cacheDirectory: true,
        presets: ["es2015", "react", "stage-1"]
      }
    }, {
      test: /\.jpg/, loader: "file-loader?mimetype=image/jpg"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }, {
      test: /\.json/, loader: "json-loader",
    }, {
      test: /\.mp4/, loader: "file-loader?mimetype=video/mp4"
    }, {
      test: /\.webm/, loader: "file-loader?mimetype=video/webm"
    }, {
      test: /\.ogg/, loader: "file-loader?mimetype=video/ogg"
    }]
  },
  target: "node"
}];
