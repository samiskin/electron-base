import { compose, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { electronEnhancer } from 'redux-electron-store';
import React from 'react';
import rootReducer from '../reducers';

let logger = createLogger({
  level: 'info',
  duration: true
});

let enhancer = compose(
  applyMiddleware(thunk, logger),
  electronEnhancer()
);

if (process.type === 'renderer' && !process.guestInstanceId) {
  enhancer = compose(
    enhancer,
    require('DevTools').default.instrument()
  );
}

// let store = createStore(rootReducer, null, enhancer);
let store = enhancer(createStore)(rootReducer);

export default store;
