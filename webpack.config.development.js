'use strict';

const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const baseConfig = require('./webpack.config.base');

const config = Object.create(baseConfig);

config.debug = true;
config.devtool = 'cheap-module-eval-source-map';
config.entry = [
  'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr',
  './src/entry'
];
config.output.publicPath = 'http://localhost:8080/dist/';

config.module.loaders.push(
  {test: /\.json$/, loaders: ['json-loader']},
  {test: /\.css$/, loaders: ['style', 'css?modules&sourceMap&localIdentName=[name]-[local]', 'postcss']}
);

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': true,
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    }
  })
);

config.target = webpackTargetElectronRenderer(config);

module.exports = config;

