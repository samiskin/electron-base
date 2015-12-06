const electron = require('electron-prebuilt');
const proc = require('child_process');
const webpack = require('webpack');
const config = require('./webpack.config.base');
const fs = require('fs');

/*var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });
config.externals = nodeModules;*/

config.devtool = 'cheap-module-eval-source-map';
config.output.filename = 'main.js';
config.target = 'atom';
config.entry = './main.js';
config.devtool = 'sourcemap';
config.plugins.push(
  new webpack.BannerPlugin('require("source-map-support").install();',
    { raw: true, entryOnly: false })
);

webpack(config, function(err, stats) {
  console.log(err);
  const child = proc.spawn(electron, [`${__dirname}/build/main.js`], {env: {HOT: 1}});
});

