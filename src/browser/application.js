import url from 'url';
import BrowserWindow from 'browser-window';
import wat from 'test.js';

export default class Application {

  constructor() {
    let mainWindow = new BrowserWindow({
      width: 1024,
      height: 728
    });

    console.log(wat());

    let htmlFile = process.env.HOT ? `index-hot.html` : `index.html`;
    this.loadFileUrl(mainWindow, `${process.cwd()}/static/${htmlFile}`);
  }

  loadFileUrl(wnd, pathname, params = {}) {
    let targetUrl = url.format({
      protocol: 'file',
      pathname: pathname,
      slashes: true,
      query: {params: JSON.stringify(params)}
    });

    wnd.loadUrl(targetUrl);
  }

}
