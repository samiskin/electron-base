'use strict';

const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules', 'components', 'lib', 'renderer', 'browser'],
    extensions: ['', '.js'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  plugins: [
  ],
  externals: [
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/}
    ]
  }
};
