/* eslint-disable no-var */

'use strict';

var path = require('path');
var webpack = require('webpack');
// var pkg = require('./package.json');
var fs = require('fs');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const postcssImport = require('postcss-import');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {

  entry: [
    './src/app.js'
  ],

  output: {
    path: './',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },

  // target: "atom",

  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules', 'components', 'src', 'lib'],
    extensions: ['', '.js']
  },

  postcss: function(webpackDependency) {
    return [
      postcssImport({
        addDependencyTo: webpackDependency,
        path: '/'
      }),
      autoprefixer,
      precss
    ];
  },

  plugins: [
    new webpack.IgnorePlugin(new RegExp('^(fs|ipc)$')),
    new webpack.BannerPlugin('require("source-map-support").install();',
      {raw: true, entryOnly: false })
  ],

  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
      {test: /\.json$/, loaders: ['json-loader']},
      {test: /\.css$/, loaders: ['style', 'css?modules', 'postcss']}
    ]
  },

  externals: nodeModules,

  devtool: 'source-map'

};
