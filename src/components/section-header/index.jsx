import * as React from 'react';
import './style/index'

import * as classNames from 'classnames'

class SectionHeader extends React.Component {
    render() {
        let { title, children } = this.props
        return (
            <div className="section-header">
                <header className="title">{title}</header>
                <div className="btn-box">
                    { children }
                </div>
            </div>
        );
    }
}

export default SectionHeader;
