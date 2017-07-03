import ActionTypes from '../constants/actionTypes'

export function sayHello(name) {
    return (dispatch => {
        dispatch({ type: ActionTypes.LOGIN_SAY_HELLO, name: name })
    })
}

/**
 * 登录
 * @param {*用户obj} data
 * @param {*} cb
 */
export function login(data, cb) {
    console.log(1111);
    return (dispatch => {
        dispatch({ type: ActionTypes.LOGIN_SAY_HELLO, user: { name: '' } })
        cb(null, { name: '' })
    })
}

/**
 * 登出
 * @param {*} cb
 */
// export function logout(cb) {
//     return (dispatch => {
//         let req = request.get('/api/logout')
//         req.end((err, res) => {
//             dispatch({ type: ActionTypes.COMMON_SAY_HELLO, user: null, fun_permissions: null, permissions_tree: null })
//             cb(null, res.body)
//         })
//     })
// }

const HomeActionCreatorsMap = {
    'sayHello': sayHello,
    'login': login,
}


export default HomeActionCreatorsMap;
