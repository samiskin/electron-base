import { BrowserWindow } from 'electron';

export default class Application {

  constructor() {
    let mainWindow = new BrowserWindow({
      width: 1024,
      height: 728
    });

    let htmlFile = process.env.HOT ? `index-hot.html` : `index.html`;
    mainWindow.loadURL(`file://${__dirname}/../renderer/${htmlFile}`);
  }

}
