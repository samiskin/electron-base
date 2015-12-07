import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import App from 'App.jsx';
import World from 'World.jsx';
import Mars from 'Mars.jsx';
import url from 'url';
import Store from 'Store';
import { Provider } from 'react-redux';

const queryParams = url.parse(window.location.href, true).query;

global.windowSettings = queryParams.windowParams ? JSON.parse(queryParams.windowParams) : {};


const reactHost = global.document.createElement('span');
global.document.body.appendChild(reactHost);

console.log(window.location.href);

render((
  <Provider store={Store.store}>
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={World}/>
        <Route path="/mars" component={Mars}/>
      </Route>
    </Router>
  </Provider>
), reactHost);

