import * as React from 'react';
import * as classNames from 'classnames'
import * as Menu from 'antd/lib/menu'
import 'antd/lib/menu/style'
import './style/index.scss'

import * as _ from 'lodash'


class Sidebar extends React.Component {
    clickMenuHandler(e) {
        let { navClick } = this.props
        let path = e.target.getAttribute('data-href')
        navClick ? navClick(path) : null
    }
    // renderMenus() {
    //     let { data } = this.props
    //     return data.map((item, i) => {
    //         return (
    //             <Menu.Item key={item.key}>
    //                 <a onClick={this.clickMenuHandler.bind(this)} data-href={item.key} href="javascript:;">{item.name}</a>
    //             </Menu.Item>
    //         )
    //     })
    // }
    renderMenus() {
        let { navClick, isActive, data } = this.props
        return data.map((item, i) => {
            function clickHandler() {
                if (!item.active) {
                    navClick ? navClick(item.route) : null
                }
            }
            let classes = {
                'menu-item': true,
                'active': isActive(`/${item.route}`),
            }
            return (
                <div onClick={clickHandler} key={i} className={classNames(classes)}>
                    <div className='menu-item-inner'>{item.name}</div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='sidebar'>
                <div className='menu-wapper'>
                    {this.renderMenus()}
                </div>
            </div>
        );
    }
}

Sidebar.defaultProps = {
    data: [
        {
            name: 'ProfileQuery',
            route: 'profilequery'
        },
        {
            name: 'ProfileManage',
            route: 'profilemanage'
        },
        {
            name: 'ProvinceData',
            route: 'provincedata'
        },
        {
            name: 'OperatorManage',
            route: 'operatormanage'
        },
    ]
};

export default Sidebar;
