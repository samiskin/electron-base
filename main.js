var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1360, height: 800});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  setTimeout(() => mainWindow.setSize(100, 100), 1000);
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
