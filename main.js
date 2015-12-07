
'use strict';
import app from 'app';
import BrowserWindow from 'browser-window';
import Application from 'browser/application';
import crashReporter from 'crash-reporter';

require('electron-debug')();
 crashReporter.start();

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', function() {
  /*
  let mainWindow = new BrowserWindow({ width: 1024, height: 728 });

  if (process.env.HOT) {
    mainWindow.loadURL(`file://${__dirname}/static/index-hot.html`);
  } else {
    mainWindow.loadURL(`file://${__dirname}/static/index.html`);
  }
  */

  const application = new Application();
});
