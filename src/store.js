import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
}

import { createStore, applyMiddleware } from 'redux';
import createReducer from './reducers/index';

export default function configureStore() {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    let store = createStoreWithMiddleware(createReducer());
    store.asyncReducers = {};
    return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
}
