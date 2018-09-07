import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import history from './history';
import rootReducer from './rootReducer';

let devToolsExtension = (f: any) => f;

const router = routerMiddleware(history);

const middlewares = [
  thunk,
  router,
];

if (process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line:no-var-requires
  const { createLogger } = require('redux-logger');
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);

  if ((window as any).devToolsExtension) {
    devToolsExtension = (window as any).devToolsExtension();
  }
}

export default (initialState: any = {}): Store => {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    devToolsExtension,
  ));
  return store;
};
