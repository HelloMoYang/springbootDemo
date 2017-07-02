import * as React from 'react';

import Site from './site'

// import ActionTypes from './modules/common/constants/actionTypes'

import { Router, hashHistory } from 'react-router'
global.hashHistory = hashHistory
import { injectAsyncReducer } from './store';

const profilequeryFun = function (store, callback) {
    require.ensure([], function (require) {
        // let r = require('./modules/login/reducers/index').default;
        // injectAsyncReducer(store, 'LOGIN', r);
        const m = require('./modules/profilequery/routes/index')
        callback(null, m.default)
    }, 'profilequery')
}
const profilemanageFun = function (store, callback) {
    require.ensure([], function (require) {
        // let r = require('./modules/login/reducers/index').default;
        // injectAsyncReducer(store, 'LOGIN', r);
        const m = require('./modules/profilemanage/routes/index')
        callback(null, m.default)
    }, 'profilemanage')
}
const provincedataFun = function (store, callback) {
    require.ensure([], function (require) {
        // let r = require('./modules/login/reducers/index').default;
        // injectAsyncReducer(store, 'LOGIN', r);
        const m = require('./modules/provincedata/routes/index')
        callback(null, m.default)
    }, 'provincedata')
}
const operatormanageFun = function (store, callback) {
    require.ensure([], function (require) {
        // let r = require('./modules/login/reducers/index').default;
        // injectAsyncReducer(store, 'LOGIN', r);
        const m = require('./modules/operatormanage/routes/index')
        callback(null, m.default)
    }, 'operatormanage')
}
const loginFun = function (store, callback) {
    // if (!loginFlag) {
    //     store.dispatch({ type: ActionTypes.COMMON_SAY_HELLO, loading: true })
    // }
    // require.ensure([], function (require) {
    //     let r = require('./modules/login/reducers/index').default;
    //     injectAsyncReducer(store, 'LOGIN', r);
    //     const m = require('./modules/login/routes/index')
    //     callback(null, m.default)
    //     store.dispatch({ type: ActionTypes.COMMON_SAY_HELLO, loading: false })
    //     loginFlag = true
    // }, 'login')
}
export default function createRoutes(store) {
    const routes = [{
        path: '/',
        component: Site,
        indexRoute: { onEnter: (nextState, replace) => replace('/profilequery/list') },
        childRoutes: [
            {
                path: 'profilequery',
                indexRoute: { onEnter: (nextState, replace) => replace('/profilequery/list') },
                getChildRoutes(partialNextState, callback) {
                    profilequeryFun(store, callback)
                }
            },
            {
                path: 'profilemanage',
                indexRoute: { onEnter: (nextState, replace) => replace('/profilemanage/list') },
                getChildRoutes(partialNextState, callback) {
                    profilemanageFun(store, callback)
                }
            },
            {
                path: 'provincedata',
                indexRoute: { onEnter: (nextState, replace) => replace('/provincedata/list') },
                getChildRoutes(partialNextState, callback) {
                    provincedataFun(store, callback)
                }
            },
            {
                path: 'operatormanage',
                indexRoute: { onEnter: (nextState, replace) => replace('/operatormanage/list') },
                getChildRoutes(partialNextState, callback) {
                    operatormanageFun(store, callback)
                }
            },

        ]
    },
    {
        path: 'login',
        indexRoute: { onEnter: (nextState, replace) => replace('/login/login') },
        getChildRoutes(partialNextState, callback) {
            loginFun(store, callback)
        }
    }]

    return <Router history={hashHistory} routes={routes} />
}
