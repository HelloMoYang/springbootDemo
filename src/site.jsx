import * as React from 'react';
const { connect } = require('react-redux')
import { bindActionCreators } from 'redux';

import Headroom from 'react-headroom'
import Navbar from './components/navbar/index'
import Sidebar from './components/sidebar/index'

import * as Spin from 'antd/lib/spin'
import 'antd/lib/spin/style'

class Site extends React.Component {
    static contextTypes = {
        router: React.PropTypes.any.isRequired
    }
    navClickHandler(key) {
        global.hashHistory.push(`/${key}`)
    }
    logout() {
        this.props.loginActions.logout(() => {
            emitter.emit('notification', '退出成功', '', 'success')
            setTimeout(() => {
                global.hashHistory.push('/login/login')
            }, 1000)
        })
    }
    renderNavbar() {
        return (
            <Headroom>
                <Navbar
                    navClick={this.navClickHandler.bind(this)}
                    logout={this.logout.bind(this)} />
            </Headroom>
        )
    }
    renderSidebar() {
        return (
            <Sidebar
                navClick={this.navClickHandler.bind(this)}
                isActive={this.context.router.isActive} />
        )
    }
    render() {
        return (
            <div className='layout-full'>
                {this.renderNavbar()}
                {this.renderSidebar()}
                {this.props.children}
            </div>
        );
    }
}

export default Site;
