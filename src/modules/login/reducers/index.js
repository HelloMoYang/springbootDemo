import ActionTypes from '../constants/actionTypes'

import * as _ from 'lodash'

const initialState = {
    name: 'login',
}

export default function (state = initialState, action = null) {
    switch (action.type) {
    case ActionTypes.LOGIN_SAY_HELLO:
        return _.merge({}, state, action)
    default:
        return state
    }
}
