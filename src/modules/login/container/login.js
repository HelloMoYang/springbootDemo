const { connect } = require('react-redux')
import { bindActionCreators } from 'redux';

import HomeActionCreatorsMap from '../actions/homeActions'

import Login from '../views/login'

function mapProps(state) {
    return {
        name: state.LOGIN.name,
        user: state.COMMON.user,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(HomeActionCreatorsMap, dispatch)
    }
}

export default connect(mapProps, mapDispatchToProps)(Login)