import { combineReducers } from 'redux'

import COMMON from './../modules/common/reducers/index'

export default function createReducer(asyncReducers = null) {

    return combineReducers({ COMMON, ...asyncReducers });
}