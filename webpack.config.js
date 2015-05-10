var path = require("path");

module.exports = {
  entry: {
    lib:   "./js/entry.js",
  },
  output: {
    path: "./dist",
    publicPath: '.',
    filename: 'bundle.[name].js',
  },
  externals: {
    "jquery": "jQuery",
    "coffee-script": "CoffeeScript"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: [/node_modules/, /bower_components/] },
    ]
  },
  resolve: {
    modulesDirectories: [
      "js",
    ]
  },
};
