import * as React from 'react';
import * as ReactDOM from 'react-dom';

const { Provider } = require('react-redux')
const store = require('./store').default()

import createRoutes from './routes'

import './style/site.scss'

ReactDOM.render(
    <Provider store={store}>
        {createRoutes(store)}
    </Provider>,
    document.getElementById('mainContainer')
);
