module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?/, exclude: /node_modules/, loader: "babel?presets[]=es2015" }
    ]
  }
};
