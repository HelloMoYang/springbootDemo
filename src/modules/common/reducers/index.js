
import ActionTypes from '../constants/actionTypes'
import * as _ from 'lodash'

const initialState = {
    name: 'demo',
}

export default function COMMON(state = initialState, action = null) {
    switch (action.type) {
        case ActionTypes.COMMON_SAY_HELLO:
            return _.merge({}, state, action)
        default:
            return state
    }
}
