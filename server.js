const electron = require('electron-prebuilt');
const proc = require('child_process');
const webpack = require('webpack');
const electronConfig = require('./webpack.config.electron');
const WebpackDevServer = require('webpack-dev-server');


const electronCompiler = webpack(electronConfig);

electronCompiler.watch(
  {
    aggregateTimeout: 300,
    poll: true
  }, function(err, stats) {
    if (err) {
      console.log(err);
      console.log(stats);
      return;
    }

    console.log(`Recompiled Electron files`)
  }
);

//  const child = proc.spawn(electron, [`${__dirname}/build/main.js`], {env: {HOT: 1}});



const path = require('path');
const express = require('express');
const devConfig = require('./webpack.config.development');

const app = express();
const compiler = webpack(devConfig);

const PORT = 8080;

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: devConfig.output.publicPath,
  stats: {
    colors: true
  }
}));


app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index-hot.html'));
});

app.listen(PORT, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});

