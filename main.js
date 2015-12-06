'use strict';

require('babel-register');
let app = require('app');
let BrowserWindow = require('browser-window');

require('crash-reporter').start();


app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  let mainWindow = new BrowserWindow({width: 1360, height: 800});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
