module.exports = {
  entry: "./src/js/index.jsx",
  output: {
    path: "./dist",
    filename: "bundle.js"
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
  }
};
