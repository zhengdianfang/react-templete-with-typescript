import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import history from './history';
import rootReducer from './rootReducer';
var devToolsExtension = function (f) { return f; };
var router = routerMiddleware(history);
var middlewares = [
    thunk,
    router,
];
if (process.env.NODE_ENV === 'development') {
    // tslint:disable-next-line:no-var-requires
    var createLogger = require('redux-logger').createLogger;
    var logger = createLogger({ collapsed: true });
    middlewares.push(logger);
    if (window.devToolsExtension) {
        devToolsExtension = window.devToolsExtension();
    }
}
export default (function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var store = createStore(rootReducer, initialState, compose(applyMiddleware.apply(void 0, middlewares), devToolsExtension));
    return store;
});
//# sourceMappingURL=configStore.js.map