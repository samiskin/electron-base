import url from 'url';
import BrowserWindow from 'browser-window';

export default class Application {

  constructor() {
    let mainWindow = new BrowserWindow({
      width: 1024,
      height: 728
    });

    mainWindow.toggleDevTools();

    let htmlFile = process.env.HOT ? `index-hot.html` : `index.html`;
    // this.loadFileUrl(
    //   mainWindow,
    //   `${process.cwd()}/static/${htmlFile}`,
    //   { route: '/home' }
    // );

    let targetUrl = `file://${process.cwd()}/static/${htmlFile}`;
    console.log(`Loading ${targetUrl}`);
    mainWindow.loadURL(targetUrl);
  }

  loadFileUrl(wnd, pathname, params = {}) {
    let targetUrl = url.format({
      protocol: 'file',
      pathname: pathname,
      slashes: true,
      query: {windowParams: JSON.stringify(params)}
    });

    wnd.loadURL(targetUrl);
  }

}
