'use strict';

var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var fs = require('fs');


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
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/entry.js'
  ],

  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },

  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules','components', 'src', 'lib'],
    extensions: ['', '.js'],
    alias: {
      'React': 'react/addons'
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'React': 'react/addons',
      'keyMirror': 'keymirror'
    }),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$")),
    new webpack.BannerPlugin('require("source-map-support").install();',
    {raw: true, entryOnly: false })
  ],

  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'babel?cacheDirectory&blacklist[]=validation.react&optional[]=es7.classProperties'], exclude: /node_modules/},
      {test: /\.json$/, loaders: ['json-loader']},
      {test: /\.less$/, loaders: ['style', 'css', 'postcss', 'less']},
      {test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass']},
      {test: /\.css$/, loaders: ['style', 'css', 'postcss']}
    ]
  },

  externals: nodeModules,

  devtool: "sourcemap"

}
