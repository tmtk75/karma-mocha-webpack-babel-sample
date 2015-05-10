var webpack = require("webpack");
var path    = require("path");

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      'spec/**/*Spec.js',
      'spec/**/*Spec.coffee'
    ],

    exclude: [
    ],

    preprocessors: {
      'spec/**/*Spec.js': ['webpack', 'sourcemap'],
      'spec/**/*Spec.coffee': ['webpack', 'sourcemap'],
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    webpack: {
      module: {
        loaders: [
          {test: /\.js?$/, loader: 'babel-loader', exclude: [/node_moduels/, /bower_components/]},
          {test: /\.coffee?$/, loader: 'coffee-loader', exclude: [/node_moduels/, /bower_components/]},
        ],
      },
      resolve: {
        modulesDirectories: [
          "node_modules",
          path.join(__dirname, "bower_components"),
        ]
      },
      plugins: [
        new webpack.ResolverPlugin([
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main", ["main", "1"]])
        ], ["normal", "loader"])
      ],
      devtool: 'inline-source-map',
    }
  });
};
