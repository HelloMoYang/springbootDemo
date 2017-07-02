import ActionTypes from '../constants/actionTypes'
import * as request from 'superagent'
import { parseError } from '../../common/parse-error.js'

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
    return (dispatch => {
        //加载loading
        dispatch({ type: ActionTypes.COMMON_SAY_HELLO, loading: true })
        let req = request.post('/api/login')
        req.send(data)
        req.end((err, res) => {
            //关闭loading
            dispatch({ type: ActionTypes.COMMON_SAY_HELLO, loading: false })
            if (err || !res || !res.body || res.body.error) {
                parseError(err, res)
                cb('error', null)
            } else {
                dispatch({ type: ActionTypes.COMMON_SAY_HELLO, user: res.body })
                cb(null, res.body)
            }
        })
    })
}

/**
 * 登出
 * @param {*} cb
 */
export function logout(cb) {
    return (dispatch => {
        let req = request.get('/api/logout')
        req.end((err, res) => {
            dispatch({ type: ActionTypes.COMMON_SAY_HELLO, user: null, fun_permissions: null, permissions_tree: null })
            cb(null, res.body)
        })
    })
}

const HomeActionCreatorsMap = {
    'sayHello': sayHello,
    'login': login,
    'logout': logout,
}


export default HomeActionCreatorsMap;
