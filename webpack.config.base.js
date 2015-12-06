'use strict';

const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'components', 'src', 'lib'],
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
