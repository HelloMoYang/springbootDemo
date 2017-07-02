import * as React from 'react';
import * as classNames from 'classnames'
import './style/index'

class Tabbar extends React.Component {
    constructor(props) {
        super(props)
    }

    renderItem() {
        let { data, tabClick } = this.props

        return data.map((item, i) => {
            let classes = {
                'tabbar-item': true,
                'active': item.active,
            }

            function clickHandler() {
                if (!item.active) {
                    tabClick ? tabClick(item.key) : null
                }
            }
            return (
                <div onClick={clickHandler} key={i} className={classNames(classes)}>
                    <div className='tabbar-item-inner'>
                        {item.name}
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='tabbar'>
                <div className='tabbar-wapper'>
                    <div className='tabbar-wapper-inner'>
                        {this.renderItem()}
                    </div>
                </div>
            </div>
        );
    }
}

Tabbar.defaultProps = {
    data: [
        {
            name: '用户管理',
            active: true,
            key: 'users'
        },
        {
            name: '机构管理',
            active: false,
            key: 'organization'
        }
    ]
};

export default Tabbar;
