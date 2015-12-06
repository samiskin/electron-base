
'use strict';
require('babel-register');
const app = require('app');
const Application = require('./src/browser/application');

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  const application = new Application();
});
