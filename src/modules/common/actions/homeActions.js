
import ActionTypes from '../constants/actionTypes'

export function sayHello(name) {
    return (dispatch => {
        dispatch({ type: ActionTypes.COMMON_SAY_HELLO, name: name })
    })
}

const HomeActionCreatorsMap = {
    'sayHello': sayHello,
}


export default HomeActionCreatorsMap;
