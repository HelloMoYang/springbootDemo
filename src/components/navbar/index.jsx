import * as React from 'react';
import * as classNames from 'classnames'
import * as Menu from 'antd/lib/menu'
import 'antd/lib/menu/style'
import * as Dropdown from 'antd/lib/dropdown'
import 'antd/lib/dropdown/style'
import './style/index.scss'

import * as _ from 'lodash'


class Navbar extends React.Component {
    clickMenuHandler(e) {
        let { navClick } = this.props
        let path = e.target.getAttribute('data-href')
        navClick ? navClick(path) : null
    }
    logout() {
        this.props.logout && this.props.logout()
    }
    render() {
        const menu = (
            <Menu className='user_menu'>
                {/*<Menu.Item>
                    <a onClick={this.clickMenuHandler.bind(this)} data-href='ucenter/password' rel="noopener noreferrer" href="javascript:;">修改密码</a>
                </Menu.Item>
                <Menu.Divider />*/}
                <Menu.Item>
                    <a onClick={this.logout.bind(this)} data-href='login' rel="noopener noreferrer" href="javascript:;">安全退出</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className='navbar'>
                <div className='logo-wapper'>
                    <img src={require('../../img/logo.png')} />
                </div>
                <div className='avatar-wapper'>
                    <div className='avatar'>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="javascript:;">
                                <img src="http://120.55.114.48/api/uploads/pic/2017-6-16/02f75fd0-52a4-11e7-8d76-2f488cbc287c.png" />
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </div>
        );
    }
}

Navbar.defaultProps = {
    data: [
        {
            name: '用户管理',
            key: 'users'
        },
        {
            name: '设备管理',
            key: 'device'
        },
        {
            name: '资源管理',
            key: 'resources'
        },
        {
            name: '方案管理',
            key: 'plan'
        },
        {
            name: '发布管理',
            key: 'publish'
        },
        {
            name: '升级管理',
            key: 'upgrade'
        },
    ]
};

export default Navbar;
